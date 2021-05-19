import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialogbox',
  templateUrl: './custom-dialogbox.component.html',
  styleUrls: ['./custom-dialogbox.component.css'],
})
export class CustomDialogboxComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CustomDialogboxComponent>
  ) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close(false);
  }
}
