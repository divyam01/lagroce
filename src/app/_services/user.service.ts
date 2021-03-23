import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(userId = '60223bbbdba4e668ac2f8443') {
    return this.http
      .get<{ data: any[] }>(
        'https://staging-api.lagroce.com/bot/get-user-details/' + userId
      )
      .pipe(map((response) => response.data));
  }

  get orders() {
    return this.http
      .get<{ data: any[] }>(
        'https://staging-api.lagroce.com/bot/get-all-user-tickets'
      )
      .pipe(
        map((res) => {
          const data = res.data;
          const users = data.map((d: any) => d.user);
          return;
        })
      );
  }
}
