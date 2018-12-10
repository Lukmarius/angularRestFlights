import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PassengersComponent } from "./passengers/passengers.component";
import { AreaComponent } from "./area/area.component";
import { AirportsComponent } from "./airports/airports.component";

const routes: Routes = [
  {
    path: "",
    component: AreaComponent
  },
  {
    path: "passengers",
    component: PassengersComponent
    // pathMatch: 'full'
  },
  {
    path: "airports",
    component: AirportsComponent
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
