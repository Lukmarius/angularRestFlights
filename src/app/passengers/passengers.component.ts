import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent {
  passengers$: Object;
  err$: boolean;
  editing$: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.route.queryParams.subscribe(() => {
      this.passengers$ = null;
      this.dataService.getResources(router.url).subscribe(
        data => {
          this.err$ = false;
          this.passengers$ = data;
          console.log(this.passengers$);
        },
        error => (this.err$ = true)
      );
    });
  }

  showEditInputs(id: number): void {
    this.editing$ = id;
  }

  exitFromEditing(): void {
    this.editing$ = null;
  }

  confirmEdit(id: number, firstName: String, lastName: String) {
    console.log(`SEND: ${id} - ${firstName} - ${lastName}`);
    let passenger = { firstname: firstName, lastname: lastName };
    this.dataService.patchPassenger(id, passenger).subscribe(
      data => {
        alert("Push completed");
        console.log(data);
      },
      error => alert("Error, sorry")
    );
    this.editing$ = null;
  }
}
