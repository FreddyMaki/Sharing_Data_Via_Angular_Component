import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-parent-select-field',
  templateUrl: './parent-select-field.component.html',
  styleUrls: ['./parent-select-field.component.scss']
})
export class ParentSelectFieldComponent implements OnInit {

  public labelParent: string="Message From Parent";
  public dataParent: Array<Select2OptionData> = new Array<Select2OptionData>();
  public bindingModelParent : string="";

  constructor() { }

  ngOnInit(): void {
    //initialize data
    let value1 : Select2OptionData = {id:"1",text:"apple"};
    let value2 : Select2OptionData = {id:"2",text:"orange"};

    this.dataParent.push(value1);
    this.dataParent.push(value2);

  }

  showMessage(message: any){
    alert(message.toString());
  }


}
