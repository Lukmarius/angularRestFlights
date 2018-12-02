import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPassengers(page, size) {

    if(!page && !size){
      return this.http.get(`http://0.0.0.0:8080/api/passengers`);
    }
    else if(!page){
      return this.http.get(`http://0.0.0.0:8080/api/passengers?size=${size}`);
    }
    else if(!size){
      return this.http.get(`http://0.0.0.0:8080/api/passengers?page=${page}`);
    }
    
  }

  
}
