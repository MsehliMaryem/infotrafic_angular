import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TypeStationComponent} from './components/type-station/type-station.component';
import {StationComponent} from './components/station/station.component';

const routes: Routes = [
    {path : 'typeStation', component: TypeStationComponent },
    {path : 'station', component: StationComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
