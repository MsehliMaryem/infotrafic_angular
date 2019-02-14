import { Component, OnInit } from '@angular/core';
import {TypeStationService} from '../../services/type-station.service';
import {TypeStation} from '../../model/type-station';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {StringResponse} from '../../model/string-response';

@Component({
  selector: 'app-type-station',
  templateUrl: './type-station.component.html',
  styleUrls: ['./type-station.component.css'],
    providers:[TypeStationService]
})
export class TypeStationComponent implements OnInit {
  typeStations : TypeStation[] = new Array();
  selectedType : TypeStation;
  typeStation :TypeStation = new TypeStation();
  stringResponse : StringResponse;
    items: MenuItem[];
  updated=false;
  display = false;



    constructor(private  typeStationService : TypeStationService,private confirmationService: ConfirmationService
                ,private messageService: MessageService) { }

  ngOnInit() {

      this.items = [
          { label: 'Editer', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedType) },
          { label: 'Suprimer', icon: 'pi pi-times', command: (event) => this.delete(this.selectedType) }
      ];

      this.typeStationService.getAllTypeStation().subscribe(data=>{

        this.typeStations = data;

    },ex=>{
      console.log(ex);
    });



  }

  ajouter(){


        this.typeStationService.addTypeStation(this.typeStation).subscribe(data=>{
          this.stringResponse = data;
          if(this.stringResponse.success){

            this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
            this.display=false;

            this.typeStationService.getAllTypeStation().subscribe(
              data1=>{

              this.typeStations = data1;

            },ex=>{
              console.log(ex);
            });
          }else{
            this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
          }

        },ex=>{

          this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});

          console.log(ex);
        });


  }
  modifier(){


    this.typeStationService.updateTypeStation(this.typeStation).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;
        this.typeStationService.getAllTypeStation().subscribe(
          data1=>{

            this.typeStations = data1;

          },ex=>{
            console.log(ex);
          });

      }else{
        this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
      }

    },ex=>{
      this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});
      console.log(ex);
    });


  }


  delete(typeStation :TypeStation){
      this.confirmationService.confirm({
          message: 'Voullez vous supprimer cet enregistrement?',acceptLabel:"Oui",rejectLabel:"Non",
          accept: () => {
            this.typeStationService.deleteTypeStation(typeStation.code).subscribe(data=>{
                this.stringResponse = data;
             if(this.stringResponse.success){
                 this.typeStations = this.typeStations.filter((obj => obj !== typeStation));
                 this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
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

    edit(type :TypeStation){
      this.display=true;
      this.updated=true;
      this.typeStation = this.cloneType(type);
    }


  showDialog() {
    this.display = true;
    this.updated=false;
  }
  cloneType(c: TypeStation): TypeStation {
    const type = {};
    for (const prop of Object.keys(c))  {
      this.typeStation[prop] = c[prop];
    }
    return this.typeStation;
  }

}
