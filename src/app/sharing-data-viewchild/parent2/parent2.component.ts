import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //ViewChild allows a one component to be injected into another, giving the parent access to its attributes and functions. One caveat, however, is that child won’t be available until after the view has been initialized.
  //This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.
  @ViewChild(Child2Component) child2:any;
  message: string ="";

  ngAfterViewInit(){
    this.message = this.child2.message;
  }
}
