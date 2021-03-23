import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatRoomComponent],
  exports: [ChatRoomComponent],
  imports: [CommonModule, MatExpansionModule, MatListModule,FormsModule],
})
export class ChatRoomModule {}
