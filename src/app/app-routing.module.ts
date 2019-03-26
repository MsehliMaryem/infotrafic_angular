import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypeStationComponent} from './components/type-station/type-station.component';
import {StationComponent} from './components/station/station.component';
import {TypeAlerteComponent} from './components/type-alerte/type-alerte.component';
import {AdminComponent} from './components/admin/admin.component';
import {AbonneComponent} from './components/abonne/abonne.component';
import {TemplateComponent} from './templates/template/template.component';
import {NumeroUrgenceComponent} from './components/numero-urgence/numero-urgence.component';
import {LoginComponent} from './components/login/login.component';
import {ChauffeurTaxiComponent} from './components/chauffeur-taxi/chauffeur-taxi.component';
import {AuthenticationGuardService} from './services/authentication-guard.service';
import {LoginGuardService} from './services/login-guard.service';

const routes: Routes = [
    {path:'login', component: LoginComponent,canActivate: [LoginGuardService]},

  {path: '', component: TemplateComponent,
    canActivate: [AuthenticationGuardService], children: [
      {path : 'typeStation', component: TypeStationComponent },
      {path : 'station', component: StationComponent },
      {path:'typeAlerte', component: TypeAlerteComponent},
      {path:'admin', component: AdminComponent},
      {path:'abonne', component: AbonneComponent},
      {path:'numeroUrgence', component: NumeroUrgenceComponent},
      {path:'chauffeurTaxi', component: ChauffeurTaxiComponent}
    ]}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
