import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-recent-resolved-issues',
  templateUrl: './recent-resolved-issues.component.html',
  styleUrls: ['./recent-resolved-issues.component.css']
})
export class RecentResolvedIssuesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigateByUrl('/chatroom')
  }

}
