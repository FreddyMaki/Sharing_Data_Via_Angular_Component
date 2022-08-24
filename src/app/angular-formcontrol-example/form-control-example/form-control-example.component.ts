import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.scss']
})
export class FormControlExampleComponent implements OnInit {

  //DECLARATION FORM CONTROL:
  name: UntypedFormControl = new UntypedFormControl('',[Validators.required, Validators.maxLength(15)]);
  age :UntypedFormControl = new UntypedFormControl(20, Validators.required); //20 valeur par defaut
  city :UntypedFormControl= new UntypedFormControl();
  country : UntypedFormControl=  new UntypedFormControl({value:'India', disabled :true});
  married = new UntypedFormControl(true);

  //Initialization values:
  setNameValue(){
    this.name.setValue('Donald Trump');//Set value

    console.log('Name: ' + this.name.value);//Get value
    console.log('Validation Status: ' + this.name.status)

  }

  //Reset Value
  setResetName() {
    this.name.reset();
  }

  //Change Value
  changeValue() {
    console.log(this.married.value);
    this.married = new UntypedFormControl(!this.married.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
