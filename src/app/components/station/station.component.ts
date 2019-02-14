declare const google: any;
import { Component, OnInit } from '@angular/core';
import {StationService} from '../../services/station.service';
import {Station} from '../../model/station';
import {MessageService} from 'primeng/api';
import {StringResponse} from '../../model/string-response';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  private display =false;
  private station : Station = new Station();
  private  i = 0;
  private  stringResponse : StringResponse=new StringResponse();
  constructor(private stationService : StationService,private messageService:MessageService) { }

  options: any;

  overlays: any[]= new Array();

  ngOnInit() {
    this.options = {
      center: {lat: 36.890257, lng: 10.707417},
      zoom: 6
    };
  }
  handleMapClick(event) {

      this.display = true;

      this.station.latitude = event.latLng.lat();
    this.station.longitude = event.latLng.lng();

  }



  ajouter(){
    this.stationService.addStation(this.station).subscribe(data=>{
      this.stringResponse= data;
      if(this.stringResponse.success){
        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;

        this.overlays.push(new google.maps.Marker(
          {position:{lat: this.station.latitude, lng: this.station.longitude}, title:this.station.nom, draggable: false}));

      }else{
        this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
      }

    },ex=>{
      this.messageService.add({severity:'error', summary:"Erreur d'insertion", detail: "Opération n'est pas effectuée"});
    });
  }
}
