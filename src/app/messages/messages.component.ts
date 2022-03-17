import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-messages',
  template: `
    <div class="messMarg" *ngIf="messageService.messages.length">

      <h2>Messages</h2>
        <button mat-flat-button color="primary" type="button" class="" (click)="messageService.clear()">Clear messages</button>
        <div *ngFor='let message of messageService.messages'> {{message}} </div>

    </div>

    
    
  `,
  styleUrls: ['./messages.component.scss'
  ]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

}
