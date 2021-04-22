import { Component, OnInit } from '@angular/core';
import { WaitingToAcceptService } from '../../_services/waiting-to-accept.service';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { FirebaseService } from '../../_services/firebase.service';
import { DialogService } from '../../_services/dialog.service';
import { AgentsService } from '../../_services/agents.service';
import { map } from 'rxjs/operators';
import { AppUtils } from 'src/app/httpUtils/utils';

@Component({
  selector: 'app-waiting-for-accept',
  templateUrl: './waiting-for-accept.component.html',
  styleUrls: ['./waiting-for-accept.component.css'],
})
export class WaitingForAcceptComponent implements OnInit {
  data: any[] = [];
  agentId;
  agents: any;
  ticketId;
  url = '/bot/accept-ticket';
  transferUrl = '/bot/assign-ticket-toAgent'

  constructor(
    private ser: WaitingToAcceptService,
    private router: Router,
    private auth: FirebaseService,
    private dialog: DialogService,
    private Agents: AgentsService,
    private http: AppUtils
  ) {}

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
      console.log('data', this.data);
      this.ser.fetchDetails().subscribe((res: any) => {
        this.ticketId = res.data[0]._id;
        console.log(this.ticketId);
      });
    });
    // this.auth.signUp();
    this.auth.signIn();

    this.Agents.getAgentDetails().subscribe((res: any) => {
      this.agents = res.data;
      console.log('agents', this.agents);
    });

    this.Agents.getAgentDetails().subscribe((res: any) => {
      console.log('response', res);
      this.agentId = res.data[0]._id;
      console.log(this.agentId);
    });
  }
  acceptIssuePutReq() {
    const putdata = {
      ticket_id: this.ticketId,
      agent_id: this.agentId,
      accept_status: true,
      issue_status: 'accepted',
    };

    this.http.put(this.url, putdata).subscribe((res: any) => {
      console.log('res', res);
    });
  }

  openDialog() {
    this.dialog.openDialog();
  }

  redirect() {
    this.router.navigateByUrl('/chatroom');
  }

  transferToAgent(id){
    const transferData = {
      ticket_id: this.ticketId,
      agent_id: id
    }
    this.http.put(this.transferUrl,transferData).subscribe((res:any)=>{
      console.log("transfer res",res); 
      
    })
  }
}
