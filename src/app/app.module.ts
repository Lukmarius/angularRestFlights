import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { PassengersComponent } from './passengers/passengers.component';
import { AreaComponent } from './area/area.component';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { SizingComponent } from './sizing/sizing.component';


@NgModule({
  declarations: [AppComponent, SidebarComponent, PassengersComponent, AreaComponent, PaginationComponent, SizingComponent],
  imports: [BrowserModule, AppRoutingModule,
            HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
