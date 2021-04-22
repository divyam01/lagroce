import { Component, Input, OnInit, Output } from '@angular/core';
import { from, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { UserService } from '../../_services/user.service';
import { FirebaseService } from '../../_services/firebase.service';
import { DialogService } from '../../_services/dialog.service';
import { OrdersService } from '../../_services/orders.service';
import { CommonService } from '../../_services/common.service';
import { AgentsService } from '../../_services/agents.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { AppUtils } from 'src/app/httpUtils/utils';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  user$: Observable<any>;
  message: string;
  user: any;
  messageDetails: any;
  msgByAgent: string;
  senderName: string;
  orderDetails: any;
  value: any;
  agent: any;
  dataArray: any;
  path: String;
  progress: Number;
  imgSrc: string;
  selectedImg: any;
  timeStamp: any;
  ticketId;
  agentId;

  constructor(
    private userService: UserService,
    private chat: FirebaseService,
    private dialog: DialogService,
    private orders: OrdersService,
    private ser: CommonService,
    private Agent: AgentsService,
    private storage: AngularFireStorage,
    private http:AppUtils
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUsers(this.userId).pipe(share());
    this.userService.getUsers().subscribe((res) => {
      this.user = res;
      console.log('user', this.user);
    });

    this.chat.getMessagesList().subscribe((res) => {
      this.messageDetails = res.map((list) => {
        return {
          $key: list.key,
          ...(list.payload.val() as {}),
        };
      });

      console.log('messageDetails', this.messageDetails);
    });

    this.orders.getOrderDetails().subscribe((res: any) => {
      this.orderDetails = res.data;
      console.log('order details', this.orderDetails);
    });
    

    this.Agent.getAgentDetails().subscribe((res: any) => {
      this.agent = res.data;
      console.log('agent details', this.agent);
      this.agentId = this.agent[0]._id
    });
  }

  panelOpenState = false;

  @Input() userId: string = '60223bbbdba4e668ac2f8443';

  send() {
    this.chat.sendMessage(this.user, this.message, this.agent);
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
      setTimeout(() => {
        this.message = null;
      }, 500);
    } 
  }
  openDialog(value) {
    if (value === 'resolved') {
      this.dialog.openDialog();
      this.ser.resolvedVal = value;
      console.log('from chat component', this.ser.resolvedVal);
    }
  }

  openDialogforOpen(value) {
    if (value === 'open') {
      this.dialog.openDialog();
      this.ser.openVal = value;
    }
  }

  upload($event) {
    this.path = $event.target.files[0];
    this.storage.upload('files/' + Math.random(), this.path);
    setTimeout(() => {
      this.dialog.openSpinner();
    }, 2000);
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    } else {
      this.imgSrc = '';
      this.selectedImg = null;
    }
  }
  handleClear() {
    setTimeout(() => {
      this.message = null;
    }, 500);
  }
  markAsResolved(){

  }
}
