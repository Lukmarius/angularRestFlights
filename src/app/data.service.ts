import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  basePath = "http://0.0.0.0:8080/api";

  getResources(url) {
    // let headers = new Headers();
    let heads = new HttpHeaders();
    heads = heads.append('Authorization', `Bearer ${this.auth.accessToken}`);
    return this.http.get(this.basePath + url, {headers: heads});
  }
}
