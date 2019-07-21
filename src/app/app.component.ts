import { Message } from './shared/message.model';
import { MessageService } from './services/message.service';
import { Component, OnInit } from '@angular/core';
import { verticalSlideTrigger } from './shared/slide.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ verticalSlideTrigger ]
})
export class AppComponent implements OnInit {
  message: string;
  color: string;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messageAlert.subscribe((notificationInfo: Message) => {
      this.message = notificationInfo.message;
      this.color = notificationInfo.color;
      setTimeout(() => {
        this.message = '';
      }, 3500);
    });
  }
}
