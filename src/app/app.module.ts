import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PassengersComponent } from "./passengers/passengers.component";
import { AreaComponent } from "./area/area.component";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from "./pagination/pagination.component";
import { SizingComponent } from "./sizing/sizing.component";
import { AirportsComponent } from "./airports/airports.component";
import { AuthService } from "./auth.service";
import { ModalPassengerComponent } from "./modal-passenger/modal-passenger.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DetailsAirportComponent } from "./details-airport/details-airport.component";
import { AgmCoreModule } from "@agm/core";
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PassengersComponent,
    AreaComponent,
    PaginationComponent,
    SizingComponent,
    AirportsComponent,
    ModalPassengerComponent,
    DetailsAirportComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBzYwkrUDWu8ZK5RWHAuRPTAUWFmwFpLhU"
    })
  ],
  entryComponents: [ModalPassengerComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
