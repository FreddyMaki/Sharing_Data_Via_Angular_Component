import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.scss']
})
export class Parent4Component implements OnInit {

   /* When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should have a shared service.
 When you have data that should aways been in sync, I find the RxJS BehaviorSubject very useful in this situation.
You can also use a regular RxJS Subject for sharing data via the service, but here’s why I prefer a BehaviorSubject.

    It will always return the current value on subscription - there is no need to call onnext
    It has a getValue() function to extract the last value as raw data.
    It ensures that the component always receives the most recent data.

In the service, we create a private BehaviorSubject that will hold the current value of the message. We define a currentMessage variable handle this data stream as an observable that will be used by the components.
Lastly, we create function that calls next on the BehaviorSubject to change its value.
The parent, child, and sibling components all receive the same treatment. We inject the DataService in the constructor, then subscribe to the currentMessage observable and set its value equal to the message variable.
Now if we create a function in any one of these components that changes the value of the message. when this function is executed the new data it’s automatically broadcast to all other components.*/
  message : string ="";
  subscription: Subscription = new Subscription();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
