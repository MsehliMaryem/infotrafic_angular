import {Component, OnInit} from '@angular/core';
import {Abonne} from '../../model/abonne';
import {AbonneService} from '../../services/abonne.service';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';

@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.css']
})
export class AbonneComponent implements OnInit {
  abonnes: Abonne[] = new Array();
  selectedAbonne: Abonne;
  abonne: Abonne = new Abonne();
  items: MenuItem[];

  constructor(private abonneService: AbonneService,
private confirmationService: ConfirmationService
    , private messageService: MessageService) {
  }

  ngOnInit() {
    this.abonneService.getAllAbonne().subscribe(data => {

      this.abonnes = data;

    }, ex => {
      console.log(ex);
    });

  }


}
