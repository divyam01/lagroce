import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room/chat-room.component';
import { AwaitingIssuesComponent } from './chat/awaiting-issues/awaiting-issues.component';
import { ChatComponent } from './chat/chat.component';
import { RecentAcceptedIssuesComponent } from './chat/recent-accepted-issues/recent-accepted-issues.component';
import { RecentOpenIssuesComponent } from './chat/recent-open-issues/recent-open-issues.component';
import { RecentResolvedIssuesComponent } from './chat/recent-resolved-issues/recent-resolved-issues.component';
import { WaitingForAcceptComponent } from './chat/waiting-for-accept/waiting-for-accept.component';

const routes: Routes = [
  {
    path: '',
    component: WaitingForAcceptComponent,
    
  },
  {
    path: 'waiting',
    component: WaitingForAcceptComponent,
  },
  {
    path: 'resolved',
    component: RecentResolvedIssuesComponent,
  },
  {
    path: 'open',
    component: RecentOpenIssuesComponent,
  },
  {
    path: 'accepted',
    component: RecentAcceptedIssuesComponent,
  },
  {
    path: 'awaiting',
    component: AwaitingIssuesComponent,
  },
  {
    path:'chatroom',component:ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
