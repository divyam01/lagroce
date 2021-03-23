import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-recent-open-issues',
  templateUrl: './recent-open-issues.component.html',
  styleUrls: ['./recent-open-issues.component.css']
})
export class RecentOpenIssuesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
