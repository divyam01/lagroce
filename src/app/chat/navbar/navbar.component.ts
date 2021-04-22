import { Component, OnInit } from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/httpUtils/utils';
import { CommonService } from '../../_services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isChecked: boolean;
  status: string;
  public search: any;
  startDate: any;
  endDate: any;

  constructor(private ser: CommonService,private http:AppUtils,private router:Router) {}

  ngOnInit(): void {}

  getDate(e: any) {
    console.log('StartDate::', this.startDate?._d);
    console.log('EndDate::', this.endDate?._d);
  }
  getSearchValue() {
    
    this.ser.searchResults(this.search)
    this.router.navigateByUrl('/search')
  }
  check() {
    if (this.isChecked) {
      this.status = 'Online';
    } else {
      this.status = 'Offline';
    }
  }
}
