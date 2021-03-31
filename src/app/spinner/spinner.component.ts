import { Component, OnInit } from '@angular/core';
import { DialogService } from '../_services/dialog.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  
  constructor(public dialog: DialogService) {}

  ngOnInit(): void {}
  
}
