import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PassengersComponent } from "./passengers/passengers.component";
import { AreaComponent } from "./area/area.component";
import { AirportsComponent } from "./airports/airports.component";
import { DetailsAirportComponent } from "./details-airport/details-airport.component";

const routes: Routes = [
  {
    path: "",
    component: AreaComponent
  },
  {
    path: "passengers",
    component: PassengersComponent
    // pathMatch: "prefix"
  },
  {
    path:
      "passengers/search/findPassengersByFirstnameIsContainingOrLastnameIsContaining",
    component: PassengersComponent
    // pathMatch: "prefix"
  },
  {
    path: "airports",
    component: AirportsComponent
    // pathMatch: 'full'
  },
  {
    path: "airports/:id",
    component: DetailsAirportComponent
    // pathMatch: 'full'
  },
  {
    path:
      "airports/search/findAirportsByAirportIdIsContainingOrCityIsContainingOrCountryIsContaining",
    component: AirportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
