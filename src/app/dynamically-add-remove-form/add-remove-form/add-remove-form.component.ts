import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-remove-form',
  templateUrl: './add-remove-form.component.html',
  styleUrls: ['./add-remove-form.component.scss']
})
export class AddRemoveFormComponent implements OnInit {
  name: string = "Angular";
  productform !: UntypedFormGroup

  constructor(private formBuilder: UntypedFormBuilder) {
    this.productform = this.formBuilder.group(
      {
        name: "",
        quantities: this.formBuilder.array([])
      })
  }
  ngOnInit(): void {
  }

  quantities(){
    return this.productform.get("quantities") as UntypedFormArray;
  }
  newQuantities(){
    return this.formBuilder.group(
      {
                      qty: new UntypedFormControl('', Validators.required ),
                      price:''
                    })
  }
  addQuantity(){
    this.quantities().push(this.newQuantities());
  }

  removeQuantities(i: number){
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productform.value);
  }

}
