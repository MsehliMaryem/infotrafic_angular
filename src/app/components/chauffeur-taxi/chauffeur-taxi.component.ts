import { Component, OnInit } from '@angular/core';
import {ChauffeurTaxiService} from '../../services/chauffeur-taxi.service';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ChauffeurTaxi} from '../../model/chauffeur-taxi';

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
    ,private messageService: MessageService) { }

  ngOnInit() {
    this.chauffeurTaxiService.getAllChauffeurTaxi().subscribe(data=>{

      this.chauffeurTaxis = data;

    },ex=>{
      console.log(ex);});


  }

}
