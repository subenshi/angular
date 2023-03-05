import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  serviceEndpoint = 'users';

  constructor(
    private http: HttpClient
  ) { }

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<any>(`${environment.micros.url}${this.serviceEndpoint}?name=123`);
  }
}
