import { Component, OnInit } from '@angular/core';
import { WaitingToAcceptService } from '../../_services/waiting-to-accept.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../_services/firebase.service';

@Component({
  selector: 'app-waiting-for-accept',
  templateUrl: './waiting-for-accept.component.html',
  styleUrls: ['./waiting-for-accept.component.css'],
})
export class WaitingForAcceptComponent implements OnInit {
  data: any[] = [];
  constructor(
    private ser: WaitingToAcceptService,
    private router: Router,
    private auth: FirebaseService
  ) {}

  ngOnInit(): void {
    this.ser.fetchDetails().subscribe((res: any) => {
      this.data = res.data;
    });
    // this.auth.signUp();
    this.auth.signIn();
  }

  redirect() {
    this.router.navigateByUrl('/chatroom');
  }
}
