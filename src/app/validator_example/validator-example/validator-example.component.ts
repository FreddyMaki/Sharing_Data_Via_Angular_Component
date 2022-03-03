import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validator-example',
  templateUrl: './validator-example.component.html',
  styleUrls: ['./validator-example.component.scss']
})
export class ValidatorExampleComponent implements OnInit {
  title = 'FormValidation';
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted = false;
  //user = new User();

  constructor() { }

  ngOnInit(): void {
  }

//   onFormSubmit(form: NgForm) {
//     this.isValidFormSubmitted = false;
//     if (form.invalid) {
//        return;
//     }
//     this.isValidFormSubmitted = true;
//     form.resetForm();

//  }

//}
// export class User {
//   mobileNumber ?: string;
 }
