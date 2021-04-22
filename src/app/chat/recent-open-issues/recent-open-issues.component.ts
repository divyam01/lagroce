import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DialogService} from '../../_services/dialog.service'
import {AgentsService} from '../../_services/agents.service'
import { AppUtils } from 'src/app/httpUtils/utils';

@Component({
  selector: 'app-recent-open-issues',
  templateUrl: './recent-open-issues.component.html',
  styleUrls: ['./recent-open-issues.component.css']
})
export class RecentOpenIssuesComponent implements OnInit {
  agents:any;
  url="/bot/get-open-tickets/606469c63c4e1a4fc8c89781"
  data:[]=[]
  transferUrl = '/bot/assign-ticket-toAgent';
  ticketId;
  constructor(private router:Router,private dialog:DialogService,private Agents:AgentsService, private  http:AppUtils) { }

  ngOnInit(): void {
    this.Agents.getAgentDetails().subscribe((res:any)=>{
      this.agents=res.data
    })

    this.http.get(this.url).subscribe((res:any)=>{
      this.data=res.data
    })
    // this.http.get(this.url).subscribe((res:any)=>{
    //   this.ticketId=res.data[0]._id
    // })


  }
  openDialog(){
    this.dialog.openDialog()
  }
  redirect(){
    this.router.navigateByUrl('/chatroom')
  }
  // transferToAgent(id){
  //   const transferData = {
  //     ticket_id: this.ticketId,
  //     agent_id: id,
  //   };
  //   this.http.put(this.transferUrl, transferData).subscribe((res: any) => {
  //     console.log('transfer res', res);
  //   });

  // }

}
