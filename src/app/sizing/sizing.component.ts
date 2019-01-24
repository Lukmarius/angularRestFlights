import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sizing",
  templateUrl: "./sizing.component.html",
  styleUrls: ["./sizing.component.scss"]
})
export class SizingComponent implements OnInit {
  @Input() page: Object;
  @Input() collectionName: String;
  sizes = [5, 20, 50, 500];
  sortBy: String;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url.includes("passengers")) {
      this.sortBy = "passengerId";
    } else if (this.router.url.includes("airports")) {
      this.sortBy = "";
    }
  }
}
