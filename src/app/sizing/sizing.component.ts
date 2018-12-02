import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sizing",
  templateUrl: "./sizing.component.html",
  styleUrls: ["./sizing.component.scss"]
})
export class SizingComponent {
  constructor() {}

  @Input() page: Object;
  @Input() collectionName: String;
  sizes = [5, 20, 50, 500];
}
