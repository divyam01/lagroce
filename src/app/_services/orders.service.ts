import { Injectable } from '@angular/core';
import {AppUtils} from '../httpUtils/utils'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url = '/bot/get-order-ByOrderId/78703733'
  constructor(private http:AppUtils) { }
  getOrderDetails(){
   return this.http.get(this.url)
  }
}
