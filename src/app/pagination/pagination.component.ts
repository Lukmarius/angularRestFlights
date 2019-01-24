import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input() page: Object;
  @Input() links: Object;
  @Input() collectionName: String;
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
