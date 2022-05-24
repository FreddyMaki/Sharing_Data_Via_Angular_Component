import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-parent-dialog-example',
  templateUrl: './parent-dialog-example.component.html',
  styleUrls: ['./parent-dialog-example.component.scss']
})

export class ParentDialogExampleComponent implements OnInit {
  animal: string="";;
  name: string="Florin Coco";
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  //Show dialog:
  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result =>
      {
        console.log('The dialog was closed');
        this.animal = result;
      });
  }

}
