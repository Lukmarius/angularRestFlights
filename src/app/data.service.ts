import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  basePath = "http://0.0.0.0:8080/api";

  getResources(url) {
    let heads = new HttpHeaders();
    heads = heads.append("Authorization", `Bearer ${this.auth.accessToken}`);
    return this.http.get(this.basePath + url, {
      headers: heads
    });
  }

  searchPassengersByAny(word: String) {
    this.router.navigateByUrl(
      `passengers/search/findPassengersByFirstnameIsContainingOrLastnameIsContaining?word=${word}`
    );
  }

  searchAirportByAny(word: String) {
    this.router.navigateByUrl(
      `airports/search/findAirportsByAirportIdIsContainingOrCityIsContainingOrCountryIsContaining?word=${word}`
    );
  }

  patchPassenger(id: number, passenger: Object) {
    let heads = new HttpHeaders();
    heads = heads.append("Authorization", `Bearer ${this.auth.accessToken}`);
    return this.http.patch(this.basePath + `/passengers/${id}`, passenger, {
      headers: heads
    });
  }
}
