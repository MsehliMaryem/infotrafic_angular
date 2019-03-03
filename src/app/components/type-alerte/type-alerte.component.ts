import { Component, OnInit } from '@angular/core';
import {TypeAlerteService} from '../../services/type-alerte.service';
import {TypeAlerte} from '../../model/type-alerte';
import {StringResponse} from '../../model/string-response';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';


@Component({
  selector: 'app-type-alerte',
  templateUrl: './type-alerte.component.html',
  styleUrls: ['./type-alerte.component.css'],
  providers:[TypeAlerteService]
})
export class TypeAlerteComponent implements OnInit {
selectedTypeALerte : TypeAlerte ;
typeAlertes :TypeAlerte[]= new Array();
typeAlerte : TypeAlerte=new TypeAlerte() ;
stringResponse : StringResponse;
  items: MenuItem[];
  updated=false;
  display = false;


  constructor( private  typeAlerteService: TypeAlerteService ,private confirmationService: ConfirmationService
,private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      { label: 'Editer', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedTypeALerte) },
      { label: 'Suprimer', icon: 'pi pi-times', command: (event) => this.delete(this.selectedTypeALerte) }
    ];

    this.typeAlerteService.getAllTypeAlerte().subscribe(data=>{

      this.typeAlertes = data;

    },ex=>{
      console.log(ex);
    });

  }
  ajouter(){


    this.typeAlerteService.addTypeAlerte(this.typeAlerte).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;

        this.typeAlerteService.getAllTypeAlerte().subscribe(
          data1=>{

            this.typeAlertes = data1;

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


    this.typeAlerteService.updateTypeAlerte(this.typeAlerte).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;
        this.typeAlerteService.getAllTypeAlerte().subscribe(
          data1=>{

            this.typeAlertes = data1;

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
  delete(typeAlerte :TypeAlerte)
  {
    this.confirmationService.confirm({
      message: 'Voullez vous supprimer cet enregistrement?',acceptLabel:"Oui",rejectLabel:"Non",
      accept: () => {
        this.typeAlerteService.deleteTypeAlerte(typeAlerte.idType).subscribe(data=>{
          this.stringResponse = data;
          if(this.stringResponse.success){
            this.typeAlertes = this.typeAlertes.filter((obj => obj !== typeAlerte));
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

  edit(type:TypeAlerte){
    this.display=true;
    this.updated=true;
    this.typeAlerte = this.cloneType(type)  ;
  }
  showDialog() {
    this.display = true;
    this.updated=false;
  }
  cloneType(c:TypeAlerte): TypeAlerte
  {
    for (const prop of Object.keys(c))  {
      this.typeAlerte[prop] = c[prop];
    }
    return this.typeAlerte ;
  }


}
