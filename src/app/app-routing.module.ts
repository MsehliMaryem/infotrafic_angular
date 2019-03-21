import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TypeStationComponent} from './components/type-station/type-station.component';
import {StationComponent} from './components/station/station.component';
import {TypeAlerteComponent} from './components/type-alerte/type-alerte.component';
import {AdminComponent} from './components/admin/admin.component';
import {AbonneComponent} from './components/abonne/abonne.component';
import {TemplateComponent} from './templates/template/template.component';

const routes: Routes = [

  {path: '', component: TemplateComponent, children: [
      {path : 'typeStation', component: TypeStationComponent },
      {path : 'station', component: StationComponent },
      {path:'typeAlerte', component: TypeAlerteComponent},
      {path:'admin', component: AdminComponent},
      {path:'abonne', component: AbonneComponent}
    ]}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
