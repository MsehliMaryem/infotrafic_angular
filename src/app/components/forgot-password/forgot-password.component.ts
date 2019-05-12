import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {StringResponse} from '../../model/string-response';
import {ForgotPaswwordService} from '../../services/forgot-paswword.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;

  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private forgotPasswordService: ForgotPaswwordService,
              private router: Router) {
  }

  ngOnInit() {
  }

  envoyer() {

    this.forgotPasswordService.forgotPassword(this.email).subscribe( res => {
      if(res.success){
      this.router.navigate(['/changePwd', this.email]);
      }else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    });

  }
}
