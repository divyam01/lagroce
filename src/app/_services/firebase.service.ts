import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  email: string = 'divyammathur007@gmail.com';
  password: string = 'divyam@12';

  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {}

  signIn() {
    this.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log('User signed in  ::', res.user);
      });
  }
  signUp() {
    this.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log('User signed up ::', res.user);
      });
  }

  sendMessage(user:any, message:string, chatID:string) {
    console.log(user,message,chatID);
    
    const messageData = {
      senderID: user._id,
      messageBody: message,
      senderName: user.name.first_name+ ' ' +user.name.last_name,
      timeStamp: new Date().getTime(),
    };
    console.log("message",messageData);
    
    const agentMeta = {
      name: user.name,
      new: true,
    };
    const userMeta = {
      new: false,
    };
    this.db.list(`Chat/${chatID}`).push(messageData);
    this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
    this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
  }

  getMessagesList() {  
    return this.db.object('Chat').valueChanges(); 
}
}
