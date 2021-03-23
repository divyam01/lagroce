import { Component, OnInit } from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isChecked: boolean;
  status: string;

  startDate: any;
  endDate: any;
  constructor() {}

  ngOnInit(): void {}

  getDate(e: any) {
    console.log('StartDate::', this.startDate?._d);
    console.log('EndDate::', this.endDate?._d);
  }
  check() {
    if (this.isChecked) {
      this.status = 'Online';
    } else {
      this.status = 'Offline';
    }
  }
}
