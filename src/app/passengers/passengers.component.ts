import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Passenger } from "../passenger";
import { MatDialog } from "@angular/material/dialog";
import { ModalPassengerComponent } from "../modal-passenger/modal-passenger.component";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent implements OnInit {
  private passengers$: Object;
  private err$: Object;
  private editing$: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(() => this.getPassengers());
  }

  getPassengers(): void {
    this.passengers$ = null;
    this.dataService.getResources(this.router.url).subscribe(
      data => {
        this.err$ = false;
        this.passengers$ = data;
        console.log(this.passengers$);
      },
      error => {
        (this.err$ = error), console.log(error);
      }
    );
  }

  displayDialogBox() {
    this.dialog.open(ModalPassengerComponent, {
      height: "300px",
      width: "500px",
      disableClose: true,
      hasBackdrop: true
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
    let passenger = new Passenger(firstName, lastName);
    this.dataService.patchPassenger(id, passenger).subscribe(
      data => {
        this.getPassengers();
        console.log(data);
      },
      error => alert("Error, sorry")
    );
    this.editing$ = null;
  }
}
