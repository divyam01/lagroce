import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room/chat-room.component';
import { AwaitingIssuesComponent } from './chat/awaiting-issues/awaiting-issues.component';
import { ChatComponent } from './chat/chat.component';
import { RecentAcceptedIssuesComponent } from './chat/recent-accepted-issues/recent-accepted-issues.component';
import { RecentOpenIssuesComponent } from './chat/recent-open-issues/recent-open-issues.component';
import { RecentResolvedIssuesComponent } from './chat/recent-resolved-issues/recent-resolved-issues.component';
import { SearchbarComponent } from './chat/searchbar/searchbar.component';
import { WaitingForAcceptComponent } from './chat/waiting-for-accept/waiting-for-accept.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        component: WaitingForAcceptComponent,
        // redirectTo: 'waiting',
        pathMatch: 'full',
      },
      {
        path: 'waiting',
        component: WaitingForAcceptComponent,
        // redirectTo: 'waiting',
        // pathMatch: 'full',
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
        path: 'chatroom',
        component: ChatRoomComponent,
      },
      {
        path: 'search',
        component:SearchbarComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
