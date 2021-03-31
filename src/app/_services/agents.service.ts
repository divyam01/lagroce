import { Injectable } from '@angular/core';
import {AppUtils} from '../httpUtils/utils'

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  url = '/bot/get-all-customer_agents'
  url2 = ' /bot/get-customer_agent-tickets/fgJP8z'
  
  constructor(private http:AppUtils) { }
  getAgentDetails(){
    return this.http.get(this.url)
  }

  getIssues(){
    return this.http.get(this.url2)
  }
}
