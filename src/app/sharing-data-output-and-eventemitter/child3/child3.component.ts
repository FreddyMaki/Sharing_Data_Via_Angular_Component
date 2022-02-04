import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() messageEvent = new EventEmitter();
  message : string ="Hola Mundo...(from child)";

  sendMessage(){
    this.messageEvent.emit(this.message);
  }
}
