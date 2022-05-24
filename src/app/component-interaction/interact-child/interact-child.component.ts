import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-interact-child',
  templateUrl: './interact-child.component.html',
  styleUrls: ['./interact-child.component.scss']
})
export class InteractChildComponent implements OnInit {

  @Input() parentData: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeFromChild(){
    this.parentData-=1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

}
