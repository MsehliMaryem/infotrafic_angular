import {TypeStationService} from '../../services/type-station.service';

declare const google: any;
import { Component, OnInit } from '@angular/core';
import {StationService} from '../../services/station.service';
import {Station} from '../../model/station';
import {ConfirmationService, MessageService} from 'primeng/api';
import {StringResponse} from '../../model/string-response';
import {TypeStation} from '../../model/type-station';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  private display = false;
  private edit = false;
  private station: Station = new Station();
  private typeStations: TypeStation[];
  private stations: Station[];
  private selectedType: TypeStation;


  private stringResponse: StringResponse = new StringResponse();

  constructor(private stationService: StationService,
              private messageService: MessageService,
              private typeStationService: TypeStationService,
              private confirmationService: ConfirmationService) {
  }

  options: any;

  overlays: any[] = new Array();

  ngOnInit() {
    this.options = {
      center: {lat: 36.890257, lng: 10.707417},
      zoom: 6
    };

    this.typeStationService.getAllTypeStation().subscribe(data => {
      this.typeStations = data;
      this.selectedType = this.typeStations[0];
    }, ex => {
      console.log(ex);
    });


  this.initOverlays();





  }


  initOverlays(){
    this.stationService.getAllStation().subscribe(data => {
      this.stations = data;
      this.overlays = new Array();
      for (const stat of this.stations) {
        this.overlays.push(new google.maps.Marker(
          {position: {lat: stat.latitude, lng: stat.longitude}, zIndex: stat.code, draggable: false}));


      }
    }, ex => {
      console.log(ex);
    });
  }
  handleMapClick(event) {

    this.display = true;
    this.edit=false;
    this.station = new Station();
    this.selectedType = this.typeStations[0];
    this.station.latitude = event.latLng.lat();
    this.station.longitude = event.latLng.lng();

  }


  ajouter() {

    this.station.typeStation = this.selectedType;
    this.stationService.addStation(this.station).subscribe(data => {
      this.stringResponse = data;
      if (this.stringResponse.success) {
        this.messageService.add({severity: 'success', summary: "Info", detail: this.stringResponse.message});
        this.display = false;
        this.station = new Station();
        this.selectedType = this.typeStations[0];

        this.initOverlays();

      } else {
        this.messageService.add({severity: 'warn', summary: "Attention", detail: this.stringResponse.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: "Erreur d'insertion", detail: "Opération n'est pas effectuée"});
    });
  }

  modifier() {

    this.station.typeStation = this.selectedType;
    this.stationService.updateStation(this.station).subscribe(data => {
      this.stringResponse = data;
      if (this.stringResponse.success) {
        this.messageService.add({severity: 'success', summary: "Info", detail: this.stringResponse.message});
        this.display = false;
        this.station = new Station();
        this.selectedType = this.typeStations[0];

        this.initOverlays();

      } else {
        this.messageService.add({severity: 'warn', summary: "Attention", detail: this.stringResponse.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: "Erreur d'insertion", detail: "Opération n'est pas effectuée"});
    });
  }
  handleOverlayClick(event) {
    const isMarker = event.overlay.getTitle !== undefined;

    if (isMarker) {


     this.station=this.cloneStation(findById(this.stations,event.overlay.getZIndex()));
      this.selectedType= this.station.typeStation;
      this.display=true;
      this.edit=true;


    }

  }

  delete(){
    this.confirmationService.confirm({
      message: 'Voullez vous supprimer cet enregistrement?',acceptLabel:"Oui",rejectLabel:"Non",
      accept: () => {
        this.stationService.deleteStation(this.station.code).subscribe(data=>{
          this.stringResponse = data;
          if(this.stringResponse.success){
            this.stations = this.stations.filter((obj => obj !== this.station));
            this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
            this.initOverlays();
            this.display=false;
          }else{
            this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
          }

        },ex=>{
          this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});
          console.log(ex);
        });
      }
    });
  }

  cloneStation(c: Station): Station {

    for (const prop of Object.keys(c))  {
      this.station[prop] = c[prop];
    }
    return this.station;
  }

}
function findById(data, id) {
  for (const datum of data) {

      if (datum.code === id) { return datum; }
    if (datum.children) {
      const result = findById(datum.children, id);
      if (result) { return result; }
    }
  }
}

