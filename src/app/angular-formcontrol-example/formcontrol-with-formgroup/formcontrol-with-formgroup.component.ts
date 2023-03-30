import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RegexConstants } from 'src/app/models/regex-constats.models';
import { ValiderData } from 'src/app/models/valider-data.models';

@Component({
  selector: 'app-formcontrol-with-formgroup',
  templateUrl: './formcontrol-with-formgroup.component.html',
  styleUrls: ['./formcontrol-with-formgroup.component.scss']
})
export class FormcontrolWithFormgroupComponent implements OnInit {
  phoneCtrl : UntypedFormControl = new UntypedFormControl(null,[Validators.required,Validators.maxLength(13),Validators.minLength(10), Validators.pattern(RegexConstants.AllPhone)]);

  //Declaration FormGroup with FormControl
  userForm : UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('Maesh', Validators.maxLength(10)),
    age: new UntypedFormControl(20, Validators.required),
    city: new UntypedFormControl(),
    country: new UntypedFormControl(),
    phone : this.phoneCtrl
  })

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log('Name:' + this.userForm.get('name')?.value);//on met ? avant le value parce que la valeur retournée par get peut être null.
     console.log('Age:' + this.userForm.get('age')?.value);
    console.log('City:' + this.userForm.get('city')?.value);
    console.log('Country:' + this.userForm.get('country')?.value);


    //alert(ValiderData.ConstruireTableNumero())
    console.log(ValiderData.ConstruireTableNumero());
  }

  //To validate a particular form control, we need to get value of that form control.
  //For example, to validate name FormControl, we need to create a method in our class as given below.
  get userName(): any {
    return this.userForm.get('name'); //return the form which name is 'name'
  }

  setDefaultValue(){
    this.userForm.setValue(
      {
              name:'Radede',
              age:20,
              city:'',
              country:''
            });
  }

  message: any;

  telephoneInvalide(telephone: string){
    return this.message=ValiderData.ValiderTelephone(telephone);
  }


}
