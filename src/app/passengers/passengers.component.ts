import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent {
  passengers$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.data.getPassengers(params.page, params.size).subscribe(data => {
        this.passengers$ = data;
        console.log(this.passengers$);
      });
    });
  }

  ngOnChanges() {}
}
