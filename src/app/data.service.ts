import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  basePath = "http://0.0.0.0:8080/api";

  getPassengers(url) {
    return this.http.get(this.basePath + url);
  }
}
