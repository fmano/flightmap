import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import SampleResponse from '../assets/sample-response.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(private httpClient: HttpClient) {}

  getAllFlights() {
    // return this.httpClient.get(
    //   `http://api.aviationstack.com/v1/flights?access_key=${environment.aviationStack.accessToken}`
    // );
    return of(SampleResponse);
  }
}
