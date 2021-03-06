import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { DataService } from "../data.service";
import { Status } from "../status";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-details-airport",
  templateUrl: "./details-airport.component.html",
  styleUrls: ["./details-airport.component.scss"]
})
export class DetailsAirportComponent implements OnInit {
  private airport$: Object;
  private error$: Object;
  private status$: Status;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.status$ = Status.LOADING;
  }

  ngOnInit() {
    this.dataService.getResources(this.router.url).subscribe(
      data => {
        this.airport$ = data;
        this.status$ = Status.COMPLETE;
      },
      error => ((this.error$ = error), (this.status$ = Status.ERROR))
    );
  }
}
