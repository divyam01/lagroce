import { Component, OnInit } from '@angular/core';
import { WaitingToAcceptService } from '../../_services/waiting-to-accept.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../_services/firebase.service';
import { DialogService } from '../../_services/dialog.service';
import { AgentsService } from '../../_services/agents.service';

@Component({
  selector: 'app-waiting-for-accept',
  templateUrl: './waiting-for-accept.component.html',
  styleUrls: ['./waiting-for-accept.component.css'],
})
export class WaitingForAcceptComponent implements OnInit {
  data: any[] = [];

  agents: any;
  constructor(
    private ser: WaitingToAcceptService,
    private router: Router,
    private auth: FirebaseService,
    private dialog: DialogService,
    private Agents: AgentsService
  ) {}

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
    });
    // this.auth.signUp();
    this.auth.signIn();

    this.Agents.getAgentDetails().subscribe((res: any) => {
      this.agents = res.data;
      console.log("agents",this.agents);
    });
  }

  openDialog() {
    this.dialog.openDialog();
  }

  redirect() {
    this.router.navigateByUrl('/chatroom');
  }
}
