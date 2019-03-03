import { Component, OnInit } from '@angular/core';
import {Abonne} from '../../model/abonne';
import {AbonneService} from '../../services/abonne.service';

@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.css']
})
export class AbonneComponent implements OnInit {
abonnes : Abonne[]= new Array();
selectedAbonne: Abonne ;
  constructor(private abonneService:AbonneService) { }

  ngOnInit() {
    this.abonneService.getAllAbonne().subscribe(data=>{

      this.abonnes = data;

    },ex=>{
      console.log(ex);});

  }


}
