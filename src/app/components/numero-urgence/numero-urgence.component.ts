import { Component, OnInit } from '@angular/core';
import {NumeroUrgence} from '../../model/numero-urgence';
import {StringResponse} from '../../model/string-response';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {NumeroUrgenceService} from '../../services/numero-urgence.service';



@Component({
  selector: 'app-numero-urgence',
  templateUrl: './numero-urgence.component.html',
  styleUrls: ['./numero-urgence.component.css']
})
export class NumeroUrgenceComponent implements OnInit {
  selectedNumeroUrgence : NumeroUrgence ;
  numeroUrgences:NumeroUrgence[]= new Array();
  numeroUrgence : NumeroUrgence=new NumeroUrgence();
  stringResponse : StringResponse;
  items: MenuItem[];
  updated=false;
  display = false;

  constructor(private numeroUrgenceService :NumeroUrgenceService,private confirmationService: ConfirmationService
    ,private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      { label: 'Editer', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedNumeroUrgence) },
      { label: 'Suprimer', icon: 'pi pi-times', command: (event) => this.delete(this.selectedNumeroUrgence) }
    ];

    this.numeroUrgenceService.getAllNumUrgence().subscribe(data=>{

      this.numeroUrgences = data;

    },ex=>{
      console.log(ex);
    });
  }

  ajouter(){


    this.numeroUrgenceService.addNumeroUrgence(this.numeroUrgence).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;

        this.numeroUrgenceService.getAllNumUrgence().subscribe(
          data1=>{

            this.numeroUrgences = data1;

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


    this.numeroUrgenceService.updateNumeroUrgence(this.numeroUrgence).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;
        this.numeroUrgenceService.getAllNumUrgence().subscribe(
          data1=>{

            this.numeroUrgences = data1;

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


  delete(numeroUrgence:NumeroUrgence){
    this.confirmationService.confirm({
      message: 'Voullez vous supprimer cet enregistrement?',acceptLabel:"Oui",rejectLabel:"Non",
      accept: () => {
        this.numeroUrgenceService.deleteNumerourgence(numeroUrgence.id).subscribe(data=>{
          this.stringResponse = data;
          if(this.stringResponse.success){
            this.numeroUrgences = this.numeroUrgences.filter((obj => obj !== numeroUrgence));
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

  edit(num:NumeroUrgence){
    this.display=true;
    this.updated=true;
    this.numeroUrgence = this.cloneType(num)  ;
  }

  showDialog() {
    this.display = true;
    this.updated=false;
  }

  cloneType(c:NumeroUrgence): NumeroUrgence
  {
    for (const prop of Object.keys(c))  {
      this.numeroUrgence[prop] = c[prop];
    }
    return this.numeroUrgence ;
  }

}
