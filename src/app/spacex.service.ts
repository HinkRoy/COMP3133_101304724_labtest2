import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getAllLaunches(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches');
  }

  getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getLaunchDetails(flightNumber: string): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
}
