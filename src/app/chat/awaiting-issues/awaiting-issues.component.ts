import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {WaitingToAcceptService} from '../../_services/waiting-to-accept.service';

@Component({
  selector: 'app-awaiting-issues',
  templateUrl: './awaiting-issues.component.html',
  styleUrls: ['./awaiting-issues.component.css']
})
export class AwaitingIssuesComponent implements OnInit {
  data: any[] = [];
  constructor(private router:Router,  private ser:WaitingToAcceptService) { }

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
    });
  }
  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
