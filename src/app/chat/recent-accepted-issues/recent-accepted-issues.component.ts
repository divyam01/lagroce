import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-recent-accepted-issues',
  templateUrl: './recent-accepted-issues.component.html',
  styleUrls: ['./recent-accepted-issues.component.css']
})
export class RecentAcceptedIssuesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
