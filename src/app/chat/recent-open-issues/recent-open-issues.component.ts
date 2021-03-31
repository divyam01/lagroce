import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {DialogService} from '../../_services/dialog.service'
import {AgentsService} from '../../_services/agents.service'

@Component({
  selector: 'app-recent-open-issues',
  templateUrl: './recent-open-issues.component.html',
  styleUrls: ['./recent-open-issues.component.css']
})
export class RecentOpenIssuesComponent implements OnInit {
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
