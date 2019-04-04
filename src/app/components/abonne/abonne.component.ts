import {Component, OnInit} from '@angular/core';
import {Abonne} from '../../model/abonne';
import {AbonneService} from '../../services/abonne.service';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {PersonneService} from '../../services/personne.service';

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
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private personneService: PersonneService) {
  }

  ngOnInit() {
    this.abonneService.getAllAbonne().subscribe(data => {

      this.abonnes = data;

    }, ex => {
      console.log(ex);
    });

  }

  changeEtat(e) {
    const isChecked = e.checked;
    this.abonne.enabled = isChecked;

    this.personneService.activate(this.abonne).subscribe(data => {

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
