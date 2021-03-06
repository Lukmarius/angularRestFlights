import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-airports",
  templateUrl: "./airports.component.html",
  styleUrls: ["./airports.component.scss"]
})
export class AirportsComponent {
  airports$: Object;
  err$: Object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.route.queryParams.subscribe(() => {
      this.airports$ = null;
      this.dataService.getResources(router.url).subscribe(
        data => {
          this.airports$ = data;
          console.log(this.airports$);
        },
        error => (this.err$ = error)
      );
    });
  }
}
