import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Alerte} from '../../model/alerte';
import {AlerteService} from '../../services/alerte.service';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {
  alertes: Alerte[] = new Array();

  alerte: Alerte = new Alerte();
  display: boolean;
  constructor( private alerteService : AlerteService) { }

  ngOnInit() {
    this.alerteService.getAllAlerte().subscribe(data => {

      this.alertes = data;

    }, ex => {
      console.log(ex);
    });

  }

  showSignal(alerte: Alerte){
    this.display = true;
    this.alerte = alerte;
  }

}
