import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPassengers(page, size) {
    if (!page && !size) {
      return this.http.get(`http://0.0.0.0:8080/api/passengers`);
    } else {
      page = parseInt(page) - 1;
      return this.http.get(
        `http://0.0.0.0:8080/api/passengers?page=${page}&size=${size}`
      );
    }
  }
}
