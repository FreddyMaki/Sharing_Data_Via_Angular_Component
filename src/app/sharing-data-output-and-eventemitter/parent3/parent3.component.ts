import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Another way to share data is to emit data from the child, which can be listened to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.
//In the parent, we create a function to receive the message and set it equal to the message variable.
//In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter. Then we create a function named sendMessage that calls emit on this event with the message we want to send. Lastly, we create a button to trigger this function.
//The parent can now subscribe to this messageEvent that’s outputted by the child component, then run the receive message function whenever this event occurs.

  message : string="";
  receiveMessage(event : any){
     this.message = event;
   }

}
