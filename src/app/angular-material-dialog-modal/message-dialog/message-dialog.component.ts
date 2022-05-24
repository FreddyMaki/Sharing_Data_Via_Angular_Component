import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {

  value : string="";
  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    //this.value = this.data.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //To get value on data we need to get it afterView init:
  ngAfterViewInit(){
    this.value = this.data.name;
  }

}
export interface DialogData {
  animal: string;
  name: string;
}
