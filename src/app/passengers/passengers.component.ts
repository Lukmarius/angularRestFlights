import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent implements OnInit {
  passengers$: Object;


  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPassengers().subscribe(data => {
      this.passengers$ = data;
      console.log(this.passengers$)
    });
  }
}
