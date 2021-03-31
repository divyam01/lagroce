import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DialogService } from '../../_services/dialog.service'
import {AgentsService} from '../../_services/agents.service';

@Component({
  selector: 'app-recent-resolved-issues',
  templateUrl: './recent-resolved-issues.component.html',
  styleUrls: ['./recent-resolved-issues.component.css']
})
export class RecentResolvedIssuesComponent implements OnInit {
 agents:any;
  constructor(private router:Router,private dialog:DialogService,private Agents:AgentsService) { }

  ngOnInit(): void {
    this.Agents.getAgentDetails().subscribe((res:any)=>{
      this.agents= res.data;
      console.log(this.agents);
      
       
    })
  }
  openDialog(){
    this.dialog.openDialog()
  }
  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
