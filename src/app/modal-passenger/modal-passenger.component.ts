import { Component, OnInit } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-modal-passenger",
  templateUrl: "./modal-passenger.component.html",
  styleUrls: ["./modal-passenger.component.scss"]
})
export class ModalPassengerComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalPassengerComponent>) {}

  ngOnInit() {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
