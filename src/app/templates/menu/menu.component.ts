import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Personne} from '../../model/personne';
import {Admin} from '../../model/admin';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  role: string;
  admin: Admin = new Admin;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {


    this.admin =  this.authenticationService.getUser();

    if(this.admin.superAdmin === true){
      this.role = 'Super Administrateur';
    }else {
      this.role = 'Administrateur';
    }
  }

  logout(){
    this.authenticationService.logout();
  }



}
