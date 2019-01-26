import { Component, OnInit } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { DataService } from "../data.service";

@Component({
  selector: "app-modal-passenger",
  templateUrl: "./modal-passenger.component.html",
  styleUrls: ["./modal-passenger.component.scss"]
})
export class ModalPassengerComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ModalPassengerComponent>,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  addPassenger(firstName: String, lastName: String): void {
    this.dataService
      .postPassenger({
        firstname: firstName,
        lastname: lastName
      })
      .subscribe(
        data => {
          console.log(data);
          this.dialogRef.close(); // or display new passenger??
        },
        error => alert("Error, sorry")
      );
  }
}
