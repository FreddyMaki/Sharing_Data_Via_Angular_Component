import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-formcontrol-with-formarray',
  templateUrl: './formcontrol-with-formarray.component.html',
  styleUrls: ['./formcontrol-with-formarray.component.scss']
})
export class FormcontrolWithFormarrayComponent implements OnInit {
  // Now we will use FormControl with FormArray and FormGroup using FormControlName.
  //In our angular application, FormArray is used when we want to dynamically
  //generate form controls such as <input> and <select>. Find the code snippet.

  //Declaration
  //users : FormArray= new FormArray([]);
  //users: FormArray = new FormArray([new FormControl('Maesh'), new FormControl('Sareraka'), new FormControl()]);
  userForm : UntypedFormGroup = new UntypedFormGroup(
    {
      users: new UntypedFormArray([new UntypedFormControl('Maesh'), new UntypedFormControl('Sareraka'), new UntypedFormControl()])
    }
  );
  constructor() { }

  ngOnInit(): void {
  }

  get users(): UntypedFormArray{
    return this.userForm.get('users') as UntypedFormArray;
  }


  // On the instance of FormArray i.e users , we will call controls that will return array of FormControl instances.
  // Now to add a form control at run time we need to use push() method of FormArray.
  addUserField() {
    this.users.push(new UntypedFormControl());
  }

  //To remove a form control at run time we need to use removeAt() method of FormArray.
  deleteUserField(index: number) {
    this.users.removeAt(index);
  }

  onFormSubmit(){
    console.log(this.users.value); // Gives FormArray data
    console.log(this.userForm.value); // Gives Complete form data
    //Iterate FormArray
    for(let i = 0; i < this.users.length; i++) {
      console.log(this.users.at(i).value);
    }
  }

}
