import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { UserService } from '../../_services/user.service';
import { FirebaseService } from '../../_services/firebase.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  user$: Observable<any>;
  message: string;
  user: any;
  messageDetails:any;
  msgByAgent:string;
  senderName:string;

  chatID: string = '145697';

  constructor(
    private userService: UserService,
    private chat: FirebaseService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUsers(this.userId).pipe(share());
    this.userService.getUsers().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });

    this.chat.getMessagesList().subscribe((res) => {
      this.messageDetails=res;
      console.log("messageDetails",this.messageDetails);
      
    });
  }

  panelOpenState = false;

  @Input() userId: string = '60223bbbdba4e668ac2f8443';

  send() {
    this.chat.sendMessage(this.user, this.message, this.chatID);
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  fetchMessages() {
    this.chat.getMessagesList().subscribe((res) => {
      console.log(res);
    });
  }
}
