import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { FirebaseService } from '../app/_services/firebase.service';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { WaitingForAcceptComponent } from './chat/waiting-for-accept/waiting-for-accept.component';
import { RecentResolvedIssuesComponent } from './chat/recent-resolved-issues/recent-resolved-issues.component';
import { RecentOpenIssuesComponent } from './chat/recent-open-issues/recent-open-issues.component';
import { RecentAcceptedIssuesComponent } from './chat/recent-accepted-issues/recent-accepted-issues.component';
import { AwaitingIssuesComponent } from './chat/awaiting-issues/awaiting-issues.component';
import { NavbarComponent } from './chat/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { HttpClientModule } from '@angular/common/http';
import { WaitingToAcceptService } from './_services/waiting-to-accept.service';
import { AppUtils } from './httpUtils/utils';
import { ChatRoomModule } from './chat-room/chat-room.module';
import { environment } from 'src/environments/environment';
import { UserService } from './_services/user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SidebarComponent,
    WaitingForAcceptComponent,
    RecentResolvedIssuesComponent,
    RecentOpenIssuesComponent,
    RecentAcceptedIssuesComponent,
    AwaitingIssuesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    ChatRoomModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [WaitingToAcceptService, AppUtils, FirebaseService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
