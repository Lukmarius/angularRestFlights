import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  @Input() page: Object;
  @Input() links: Object;
  @Input() collectionName: String;

  constructor() { }

  ngOnInit() {
  }

}
