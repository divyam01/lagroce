import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WaitingToAcceptService } from '../../_services/waiting-to-accept.service';
import { DialogService } from '../../_services/dialog.service';
import { AgentsService } from '../../_services/agents.service';
import { AppUtils } from 'src/app/httpUtils/utils';

@Component({
  selector: 'app-awaiting-issues',
  templateUrl: './awaiting-issues.component.html',
  styleUrls: ['./awaiting-issues.component.css'],
})
export class AwaitingIssuesComponent implements OnInit {
  data: any[] = [];
  agents: any;
  ticketId;
  transferUrl = '/bot/assign-ticket-toAgent';
  constructor(
    private router: Router,
    private ser: WaitingToAcceptService,
    private dialog: DialogService,
    private Agents: AgentsService,
    private http:AppUtils
  ) {}

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
      console.log('data', this.data);
      this.ticketId=this.data[0]._id
    });
    this.Agents.getAgentDetails().subscribe((res: any) => {
      this.agents = res.data;
      console.log('agents', this.agents);
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
      agent_id: id,
    };
    this.http.put(this.transferUrl, transferData).subscribe((res: any) => {
      console.log('transfer res', res);
    });
  }
  
}
