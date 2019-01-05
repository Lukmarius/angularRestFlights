import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {}

  searchDependsOnUrl(word: String) {
    if (this.router.url.includes("passengers")) {
      this.dataService.searchPassengersByAny(word);
    } else if (this.router.url.includes("airports")) {
      this.dataService.searchAirportByAny(word);
    }
  }
}
