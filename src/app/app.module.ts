import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeStationComponent } from './components/type-station/type-station.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule, ContextMenuModule, DialogModule, GMapModule} from 'primeng/primeng';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import { StationComponent } from './components/station/station.component';
import {TemplateComponent} from './components/templates/template/template.component';
import {MenuComponent} from './components/templates/menu/menu.component';
import {HeaderComponent} from './components/templates/header/header.component';
import {FooterComponent} from './components/templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeStationComponent,
    StationComponent,
    TemplateComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

      HttpClientModule,
      TableModule,
      ContextMenuModule,
      ConfirmDialogModule,
      ToastModule,
      DialogModule,
      GMapModule

  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
