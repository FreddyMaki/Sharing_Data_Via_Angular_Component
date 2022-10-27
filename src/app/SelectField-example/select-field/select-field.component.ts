import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';


@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFieldComponent),
      multi: true,
    },
  ],
})
export class SelectFieldComponent implements OnInit {

  @Input() data: Array<Select2OptionData>= new Array<Select2OptionData>();
  @Input() classes!: string;
  @Input() width!: string;

  @Input() label!: string;
  @Input() name!: string;

  @Input() bindingModel! : any;
  @Output() bindingModelChange : EventEmitter<any> = new EventEmitter<any>();

  public options!: Options;

  selection : string ="";
  public selectionList : string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.options = {
      multiple: false,
      theme: 'classic',
      closeOnSelect: true,
      width: '300'
    };

    //SelectionList
    this.selectionList=["Flore", "Vaoline", "Boom","Clin","Homo","Extra Propre"];
  }



  change(data: any){
    this.bindingModelChange.emit(data);
  }

}
