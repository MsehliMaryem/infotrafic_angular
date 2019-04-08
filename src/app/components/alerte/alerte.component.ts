import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Alerte} from '../../model/alerte';
import {AlerteService} from '../../services/alerte.service';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.css']
})
export class AlerteComponent implements OnInit {
  alertes: Alerte[] = new Array();
  selectedAlerte: Alerte;
  alerte: Alerte = new Alerte();
  display: boolean;
  options: any;
  overlays: any[] = new Array();

  constructor(private alerteService: AlerteService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.options = {
      center: {lat: 36.890257, lng: 10.707417},
      zoom: 6
    };

    this.alerteService.getAllAlerte().subscribe(data => {
      this.alertes = data;

    }, ex => {
      console.log(ex);
    });


    this.initOverlays();


  }

  initOverlays() {
    this.alerteService.getAllAlerte().subscribe(data => {
      this.alertes = data;
      this.overlays = new Array();
      for (const stat of this.alertes) {
        let icon;
        if (stat.enabled) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        } else {
          icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
        }
        this.overlays.push(new google.maps.Marker(
          {
            position: {lat: stat.latitude, lng: stat.longitude},
            zIndex: stat.idAlerte, draggable: false, icon: icon
          }));


      }
    }, ex => {
      console.log(ex);
    });
  }


  handleOverlayClick(event) {
    const isMarker = event.overlay.getTitle !== undefined;

    if (isMarker) {

      this.display = true;
      this.alerte = Object.assign(findById(this.alertes, event.overlay.getZIndex()));
    }

  }


  changeEtat(e: any) {
    const isChecked = e.checked;

    this.alerte.enabled = isChecked;

    this.alerteService.activate(this.alerte).subscribe(data => {

      if (data.success) {

        this.messageService.add({severity: 'success', summary: 'Info', detail: data.message});


        const over = findById2(this.overlays, this.alerte.idAlerte);
        const index = this.overlays.indexOf(over);

        let icon;
        if (this.alerte.enabled) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        } else {
          icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
        }
        const item = new google.maps.Marker(
          {
            position: {lat: this.alerte.latitude, lng: this.alerte.longitude},
            zIndex: this.alerte.idAlerte, draggable: false, icon: icon
          });
        this.overlays[index] = item;
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: data.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de suppression', detail: 'Opération n\'est pas effectuée'});
      console.log(ex);
    });

  }

}

function findById(data, id) {
  for (const datum of data) {

    if (datum.idAlerte === id) {
      return datum;
    }
    if (datum.children) {
      const result = findById(datum.children, id);
      if (result) {
        return result;
      }
    }
  }
}

function findById2(data, id) {
  for (const datum of data) {

    if (datum.zIndex === id) {
      return datum;
    }
    if (datum.children) {
      const result = findById(datum.children, id);
      if (result) {
        return result;
      }
    }
  }
}
