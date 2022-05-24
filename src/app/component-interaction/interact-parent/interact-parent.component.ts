import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interact-parent',
  templateUrl: './interact-parent.component.html',
  styleUrls: ['./interact-parent.component.scss']
})
export class InteractParentComponent implements OnInit {
            //ngOnChanges vs ngOnInit---------------------------------------------------------------------------
// ngOnInit gets called only once when the component is initialized.

// ngOnChanges gets called before ngOnInit and whenever a component's bound input is changed FROM THE PARENT COMPONENT.
  // Remember that ngOnChanges is specific to bound inputs on the component. This means if you don't have any @Input properties on a child, ngOnChanges will never get called.

  // ngOnInit is specific to the component being initialized. ngOnChanges is specific to @Input properties on a child component.

        //  When should you use ngOnChanges?-----------------------------------------------------------------------
// Use ngOnChanges whenever you want to detect changes from a variable decorated by @Input.
// Remember that only changes from the parent component will trigger this function.

// Also remember that changes from the parent still update the child value even without implementing ngOnChanges.
// ngOnChanges simply adds the benefit of tracking those changes with previous and current value.

  data=0;
  constructor() { }

  ngOnInit(): void {
  }

  changeFromParent(){
    this.data += 1;
  }
}
