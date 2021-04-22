import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { AppUtils } from '../httpUtils/utils';

@Injectable({
  providedIn: 'root',
})
export class WaitingToAcceptService {
  url = '/bot/get-awaiting-accept-tickets';
  constructor(private http: AppUtils) {}

  // fetching data from api
  fetchDetails() {
    return this.http.get(this.url);
  }
}
