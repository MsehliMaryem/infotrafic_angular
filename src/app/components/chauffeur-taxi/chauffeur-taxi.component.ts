import { Component, OnInit } from '@angular/core';
import {ChauffeurTaxiService} from '../../services/chauffeur-taxi.service';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ChauffeurTaxi} from '../../model/chauffeur-taxi';
import {PersonneService} from '../../services/personne.service';

@Component({
  selector: 'app-chauffeur-taxi',
  templateUrl: './chauffeur-taxi.component.html',
  styleUrls: ['./chauffeur-taxi.component.css']
})
export class ChauffeurTaxiComponent implements OnInit {
chauffeurTaxis : ChauffeurTaxi[] = new Array();
selectedChauffeurTaxi :ChauffeurTaxi;
chauffeurTaxi : ChauffeurTaxi= new ChauffeurTaxi();
  items: MenuItem[];
  constructor( private chauffeurTaxiService :ChauffeurTaxiService,private confirmationService: ConfirmationService
    ,private messageService: MessageService,private personneService: PersonneService) { }

  ngOnInit() {
    this.chauffeurTaxiService.getAllChauffeurTaxi().subscribe(data=>{

      this.chauffeurTaxis = data;

    },ex=>{
      console.log(ex);});


  }

  changeEtat(e: any, adm: any){
    const isChecked = e.checked;
    this.chauffeurTaxi = adm;
    this.chauffeurTaxi.enabled = isChecked;

    this.personneService.activate(this.chauffeurTaxi).subscribe(data => {

      if (data.success) {

        this.messageService.add({severity: 'success', summary: 'Info', detail: data.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: data.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de suppression', detail: 'Opération n\'est pas effectuée'});
      console.log(ex);
    });

  }


}
