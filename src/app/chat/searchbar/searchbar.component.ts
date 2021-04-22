import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../_services/dialog.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/_services/common.service';
import { AgentsService } from 'src/app/_services/agents.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  public search: any;
  agents;
  orderId;

  constructor(
    private dialog: DialogService,
    private router: Router,
    public ser: CommonService,
    private Agents: AgentsService
  ) {}

  ngOnInit(): void {
    this.Agents.getAgentDetails().subscribe((res: any) => {
      console.log('agents', res);
      this.agents = res.data;
    });
  }

  transferToAgent(id) {
    const data = {};
  }

  redirect() {
    this.router.navigateByUrl('/chatroom');
  }
  openDialog() {
    this.dialog.openDialog();
  }
}
