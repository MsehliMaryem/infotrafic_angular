import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../../services/personne.service';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../services/authentication.service';
import {Admin} from '../../model/admin';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  pwd : any  = {id:'', oldPassword:'',newPassword:'',confirmPassword:''};
  constructor(private personneService: PersonneService,
              private messageService: MessageService,
              private authenticationService: AuthenticationService) { }
  admin : Admin;
  ngOnInit() {
    this.admin= this.authenticationService.getUser();
    this.pwd.id = this.admin.id;
  }

  changePwd(){

    this.personneService.changePwd(this.pwd).subscribe(data => {

      if (data.success) {

        this.messageService.add({severity: 'success', summary: 'Info', detail: data.message});
        this.authenticationService.logout();
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: data.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de suppression', detail: 'Opération n\'est pas effectuée'});
      console.log(ex);
    });
  }


  checkPwd(){
    this.personneService.checkPassword(this.pwd).subscribe(data => {

      if (!data.success) {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: data.message});
      }

    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur de suppression', detail: 'Opération n\'est pas effectuée'});
      console.log(ex);
    });
  }
}
