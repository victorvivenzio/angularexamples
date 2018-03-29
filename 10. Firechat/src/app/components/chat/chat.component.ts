import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  public message: string;
  public element: any;
  constructor(
    public _chatServices: ChatService
  ) {
    this._chatServices.loadMessages().subscribe( () => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.element = document.getElementById('app-mensajes');
  }

  public sendMessage(): void {
    this._chatServices.addMessage( this.message )
      .then( () => console.log('Envio Correcto'))
      .catch( ( err ) => console.log('Error al enviar ' + err) );
    this.message = '';
  }
}
