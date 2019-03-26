import { Component, OnInit } from '@angular/core';
import {Admin} from '../../model/admin';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin: Admin = new Admin();

  constructor(private  authenticationService: AuthenticationService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  authentifier(){
    this.authenticationService.authenticate(this.admin).subscribe( data =>{

     const token = data.headers.get('Authorization');
      this.authenticationService.storeToken(token);
      this.router.navigate(['/']);
      location.reload();
     }, ex=> {
      this.messageService.add({severity:'warn', summary:'Erreur Authentification:',
        detail:'Merci de vérifier votre login ou mot de passe'});
      console.log(ex);
    });
  }

}
