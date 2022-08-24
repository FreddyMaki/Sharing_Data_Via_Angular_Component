import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-persist-data',
  templateUrl: './persist-data.component.html',
  styleUrls: ['./persist-data.component.scss']
})
export class PersistDataComponent implements OnInit {
  form!: UntypedFormGroup;
  public food:string="not selected";
  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({food : []})
  }

  ngOnInit(): void {
    //Get item on local storage
    //const value = localStorage.getItem('app.food');
    //using Session storage:
    const value = sessionStorage.getItem('app.food');
    if(value){
      //this.food = value;
      //using another type of data
      this.form.setValue(JSON.parse(value));//For preserving FORM
    }
  }

  //String Data
  // public saveFoodToStorage()
  // {
  //   //Set Item on localStorage
  //   const value = this.form.value.food;
  //   //localStorage.setItem('app.food',value);
  //   //using Session storage:
  //   sessionStorage.setItem('app.food',value);
  // }

  //Another data type
  public saveFoodToStorage()
  {
    //Set Item on localStorage
    const value = this.form.value;
    //localStorage.setItem('app.food',value);
    //using Session storage:
    sessionStorage.setItem('app.food',JSON.stringify(value));
  }

  public resetStorage()
  {
    //Remove item using local storage
    //localStorage.removeItem('app.food');
     //Remove item using Session storage
     sessionStorage.removeItem('app.food');

  }

}
