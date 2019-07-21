import { Message } from '../shared/message.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageAlert: Subject<Message> = new Subject();
  constructor() { }

  notificationMessage(messageInfo: Message) {
    this.messageAlert.next(messageInfo);
  }
}
