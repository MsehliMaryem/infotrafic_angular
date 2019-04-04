import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeStationComponent } from './components/type-station/type-station.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {
  ConfirmDialogModule,
  ContextMenuModule,
  DialogModule,
  DropdownModule,
  GMapModule, InputSwitchModule, KeyFilterModule, MessageModule, MessagesModule,
  PasswordModule,
  ToggleButtonModule

} from 'primeng/primeng';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { StationComponent } from './components/station/station.component';
import {TemplateComponent} from './templates/template/template.component';
import {MenuComponent} from './templates/menu/menu.component';
import {HeaderComponent} from './templates/header/header.component';
import {FooterComponent} from './templates/footer/footer.component';
import { TypeAlerteComponent } from './components/type-alerte/type-alerte.component';
import { AdminComponent } from './components/admin/admin.component';
import { AbonneComponent } from './components/abonne/abonne.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import { ContentComponent } from './templates/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { NumeroUrgenceComponent } from './components/numero-urgence/numero-urgence.component';
import { ChauffeurTaxiComponent } from './components/chauffeur-taxi/chauffeur-taxi.component';
import {JwtInterceptorService} from './services/jwt-interceptor.service';
import {AlerteComponent} from './components/alerte/alerte.component';
import { DateTimeFormatPipePipe } from './utils/date-time-format-pipe.pipe';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    TypeStationComponent,
    StationComponent,
    TemplateComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    TypeAlerteComponent,
    AdminComponent,
    AbonneComponent,
    ContentComponent,
    LoginComponent,
    NumeroUrgenceComponent,
    ChauffeurTaxiComponent,
    AlerteComponent,
    DateTimeFormatPipePipe,
    ChangePasswordComponent
  ],
  imports: [
    PasswordModule,
    BrowserModule,
    ToggleButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    TableModule,
    ContextMenuModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    GMapModule,
    ShowHidePasswordModule,
    MessageModule,
    MessagesModule,
    KeyFilterModule,
    InputSwitchModule


  ],
  providers: [ConfirmationService,MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
