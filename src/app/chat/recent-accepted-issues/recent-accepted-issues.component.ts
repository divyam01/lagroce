import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DialogService} from '../../_services/dialog.service'
import {AgentsService} from '../../_services/agents.service'

@Component({
  selector: 'app-recent-accepted-issues',
  templateUrl: './recent-accepted-issues.component.html',
  styleUrls: ['./recent-accepted-issues.component.css']
})
export class RecentAcceptedIssuesComponent implements OnInit {
  agents:any;
  constructor(private router:Router,private dialog:DialogService,private Agents:AgentsService) { }

  ngOnInit(): void {
    this.Agents.getAgentDetails().subscribe((res:any)=>{
      this.agents=res.data
    })
  }
  openDialog(){
    this.dialog.openDialog()
  }
  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
