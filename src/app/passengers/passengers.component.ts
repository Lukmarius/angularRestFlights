import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent {
  passengers$: Object;
  size;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.size = 20;
    this.route.queryParams.subscribe(() => {
      this.dataService.getPassengers(router.url).subscribe(data => {
        this.passengers$ = data;
        console.log(this.passengers$);
      });
    });
  }
}
