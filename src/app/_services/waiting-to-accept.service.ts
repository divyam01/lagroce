import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { AppUtils } from '../httpUtils/utils';

@Injectable({
  providedIn: 'root',
})
export class WaitingToAcceptService {
  constructor(private http: AppUtils) {}

  // fetching data from api
  fetchDetails() {
    return this.http.get();
  }
}
