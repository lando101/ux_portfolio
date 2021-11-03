import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ContactInfo {
  name?: string;
  email?: string;
  date?: string;
  phone?: any;
  comments?: string;
}

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.scss'],
})
export class ContactInfoFormComponent implements OnInit {
  constructor() {} // @Inject(MAT_DIALOG_DATA) public data: ContactInfo // public dialogRef: MatDialogRef<ContactInfoFormComponent>,

  ngOnInit(): void {}
  onNoClick(): void {
    // this.dialogRef.close();
  }
}
