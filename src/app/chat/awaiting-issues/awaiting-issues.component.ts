import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {WaitingToAcceptService} from '../../_services/waiting-to-accept.service';
import { DialogService} from '../../_services/dialog.service';
import {AgentsService} from '../../_services/agents.service'

@Component({
  selector: 'app-awaiting-issues',
  templateUrl: './awaiting-issues.component.html',
  styleUrls: ['./awaiting-issues.component.css']
})
export class AwaitingIssuesComponent implements OnInit {
  data: any[] = [];
  agents:any;
  constructor(private router:Router,  private ser:WaitingToAcceptService,private dialog:DialogService,private Agents:AgentsService) { }

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
    });
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
