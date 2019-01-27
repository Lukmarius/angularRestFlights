import { Component, OnInit } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { DataService } from "../data.service";
import { Status } from "./status";

@Component({
  selector: "app-modal-passenger",
  templateUrl: "./modal-passenger.component.html",
  styleUrls: ["./modal-passenger.component.scss"]
})
export class ModalPassengerComponent implements OnInit {
  private status: Status;
  private addedPassenger$: Object;
  private error$: Object;

  constructor(
    private dialogRef: MatDialogRef<ModalPassengerComponent>,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.status = Status.DEFAULT;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  closeAndRefresh(): void {
    this.dialogRef.close();
    // refresh last page................
  }

  addPassenger(firstName: String, lastName: String): void {
    this.status = Status.LOADING;
    this.dataService
      .postPassenger({
        firstname: firstName,
        lastname: lastName
      })
      .subscribe(
        data => {
          console.log(data);
          this.addedPassenger$ = data;
          this.status = Status.COMPLETE;
        },
        error => {
          (this.status = Status.ERROR), (this.error$ = error);
        }
      );
  }
}
