import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  baseUrl = 'https://staging-api.lagroce.com'
  constructor(private http: HttpClient) {}
 
  get(url:any) {
   return this.http.get(this.baseUrl+url);
  }

  
}
 