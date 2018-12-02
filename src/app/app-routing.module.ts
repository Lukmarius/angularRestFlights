import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PassengersComponent} from './passengers/passengers.component';
import {AreaComponent} from './area/area.component';


const routes: Routes = [
  {
    path: '',
    component: AreaComponent
  },
  {
    path:'passengers',
    component: PassengersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
