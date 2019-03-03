import { Component, OnInit } from '@angular/core';
import {Admin} from '../../model/admin';
import {StringResponse} from '../../model/string-response';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {AdminService} from '../../services/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admins : Admin[]=new Array();
selectedAdmin : Admin ;
admin : Admin=new Admin();
  stringResponse : StringResponse;
  items: MenuItem[];
  updated=false;
  display = false;
pass= false ;
  constructor(private adminService:AdminService ,private confirmationService: ConfirmationService
    ,private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      { label: 'Editer', icon: 'pi pi-pencil', command: (event) => this.edit(this.selectedAdmin) },
      { label: 'Suprimer', icon: 'pi pi-times', command: (event) => this.delete(this.selectedAdmin) }
    ];

    this.adminService.getAllAdmin().subscribe(data=>{

      this.admins = data;

    },ex=>{
      console.log(ex);});

  }

  ajouter(){


    this.adminService.addAdmin(this.admin).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;

        this.adminService.getAllAdmin().subscribe(
          data1=>{

            this.admins = data1;

          },ex=>{
            console.log(ex);
          });
      }else{
        this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
      }

    },ex=>{

      this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});

      console.log(ex);
    });


  }

  modifier(){


    this.adminService.updateAdmin(this.admin).subscribe(data=>{
      this.stringResponse = data;
      if(this.stringResponse.success){

        this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
        this.display=false;
        this.adminService.getAllAdmin().subscribe(
          data1=>{

            this.admins = data1;

          },ex=>{
            console.log(ex);
          });

      }else{
        this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
      }

    },ex=>{
      this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});
      console.log(ex);
    });


  }

  delete(admin :Admin){
    this.confirmationService.confirm({
      message: 'Voullez vous supprimer cet enregistrement?',acceptLabel:"Oui",rejectLabel:"Non",
      accept: () => {
        this.adminService.deleteAdmin(admin.id).subscribe(data=>{
          this.stringResponse = data;
          if(this.stringResponse.success){
            this.admins = this.admins.filter((obj => obj !== admin));
            this.messageService.add({severity:'success', summary:"Info", detail: this.stringResponse.message});
          }else{
            this.messageService.add({severity:'warn', summary:"Attention", detail: this.stringResponse.message});
          }

        },ex=>{
          this.messageService.add({severity:'error', summary:"Erreur de suppression", detail: "Opération n'est pas effectuée"});
          console.log(ex);
        });
      }
    });
  }

  edit(type :Admin){
    this.display=true;
    this.updated=true;
    this.admin = this.cloneType(type)  ;

  }

  showDialog() {
    this.display = true;
    this.updated=false;
  }
  showPass()
  {
    this.pass=true;
  }
  cloneType(c: Admin): Admin {

    for (const prop of Object.keys(c))  {
      this.admin[prop] = c[prop];
    }
    return this.admin;
  }



}
