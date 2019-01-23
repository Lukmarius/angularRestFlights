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
  passengers$: Object;
  err$: boolean;
  editing$: number;
  editedPassengersMap$: Map<number, Passenger>;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
    this.editedPassengersMap$ = new Map<number, Passenger>();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      this.passengers$ = null;
      this.dataService.getResources(this.router.url).subscribe(
        data => {
          this.err$ = false;
          this.passengers$ = data;
          console.log(this.passengers$);
        },
        error => (this.err$ = true)
      );
    });
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
        this.savePassengerInView(id, passenger);
        console.log(data);
      },
      error => alert("Error, sorry")
    );
    this.editing$ = null;
  }

  savePassengerInView(id: number, passenger: Passenger): void {
    this.editedPassengersMap$.set(id, passenger);
  }
}
