import { Component, OnInit, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MyTel } from './components/tele-input/tele-input.component';

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
  providers: [],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class ContactInfoFormComponent implements OnInit {
  badSubmit: boolean = false;
  form: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    org: new FormControl(''),
    tel: new FormControl(new MyTel('', '', '')),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContactInfo,
    public dialogRef: MatDialogRef<ContactInfoFormComponent>,
    public dialog: MatDialog
  ) {} // @Inject(MAT_DIALOG_DATA) public data: ContactInfo // public dialogRef: MatDialogRef<ContactInfoFormComponent>,

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      return 'Email is required';
    }

    this.form.errors;

    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.valid) {
      this.badSubmit = false;
      // document.getElementById('formdialog').classList.add('animate__backOutUp');
      document.getElementsByClassName('animate__animated')[0].classList.add('animate__backOutUp');
      setTimeout(() => {
        this.dialog.closeAll();
      }, 470);
    } else {
      this.badSubmit = true;
    }
  }
}
