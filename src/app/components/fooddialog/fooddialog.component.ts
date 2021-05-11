import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fooddialog',
  templateUrl: './fooddialog.component.html',
  styleUrls: ['./fooddialog.component.scss'],
})
export class FooddialogComponent implements OnInit {
  ngOnInit(): void {}

  public totalitems : number = 1;
  
  constructor(
    public dialogRef: MatDialogRef<FooddialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public getReturnObject(){
    return {
      data : this.data,
      itemsCount : this.totalitems
    };
  }
}
