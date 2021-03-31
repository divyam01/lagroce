import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../_services/common.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  resolvedValue: any;
  constructor(private router: Router, private ser: CommonService) {}
  ngOnInit(): void {}
  redirect() {
    this.ser.resolvedVal;
    console.log('from dialog component', this.ser.resolvedVal);

    if (this.ser.resolvedVal === 'resolved') {
      this.router.navigateByUrl('/resolved');
    }
    if (this.ser.openVal === 'open') {
      this.router.navigateByUrl('/open');
    }
  }
  redirectTo(){
    this.router.navigateByUrl('/waiting');
  }
}
