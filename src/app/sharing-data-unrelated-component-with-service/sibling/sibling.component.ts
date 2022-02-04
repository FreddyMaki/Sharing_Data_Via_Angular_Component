import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  message: string="";
  subscription : Subscription= new Subscription();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message=message);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  newMessage(){
    this.data.changeMessage('Hello from Slibing');
  }

}
