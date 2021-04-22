import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  baseUrl = 'https://staging.lagroce.com'
  constructor(private http: HttpClient) {}
 
  get(url:any) {
   return this.http.get(this.baseUrl+url);
  }

  post(url:any,data){
    return this.http.post(this.baseUrl+url,data)
  }

  put(url:any,data){
    return this.http.put(this.baseUrl+url,data)
  }
  
}
 