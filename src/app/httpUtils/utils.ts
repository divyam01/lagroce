import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  public url = 'https://staging-api.lagroce.com/bot/get-all-user-tickets';
  constructor(private http: HttpClient) {}
 
  get() {
   return this.http.get(this.url);
  }
}
