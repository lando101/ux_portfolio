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
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { MyTel } from './components/tele-input/tele-input.component';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PositiveNotiComponent } from '../notifications/positive-noti/positive-noti.component';
export interface ContactInfo {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  date?: string;
  tel?: any;
  comment?: string;
  org?: string;
  created?: string;
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
    firstname: new FormControl(this.data.firstname, [Validators.required]),
    lastname: new FormControl(this.data.lastname, [Validators.required]),
    org: new FormControl(this.data.org),
    tel: new FormControl(new MyTel('', '', '')),
    email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContactInfo,
    public dialogRef: MatDialogRef<ContactInfoFormComponent>,
    public dialog: MatDialog,
    private fs: AngularFirestore,
    private _snackBar: MatSnackBar
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
      this.sendToDB().then((user) => {
        setTimeout(() => {
          this.dialogRef.close(user);
        }, 470);
      });
    } else {
      this.badSubmit = true;
    }
  }

  sendToDB() {
    const id = this.fs.createId();
    const tel = this.form.controls.tel.value;
    const formattedTel = `${tel.area}-${tel.exchange}-${tel.subscriber}`;
    console.log(tel.area);
    const item: ContactInfo = {
      id: id,
      firstname: this.form.controls.firstname.value,
      lastname: this.form.controls.lastname.value,
      org: this.form.controls.org.value,
      tel: formattedTel,
      email: this.form.controls.email.value,
      comment: this.form.controls.comments.value,
      created: new Date().toString(),
    };

    const promise = new Promise((resolve, reject) => {
      this.fs
        .collection('messages')
        .doc(id)
        .set(item)
        .then((data: any) => {
          this.fs
            .collection('messages')
            .doc(id)
            .get()
            .toPromise()
            .then((response: any) => {
              console.log('response', response);
              if (response.exists) {
                this.openSnackBar(
                  `${item.firstname.charAt(0).toUpperCase() + item.firstname.slice(1)}, thanks for reaching out!`,
                  'Close'
                );
                resolve(item);
              }
            })
            .catch(() => {
              this.openSnackBar('Whoops! Something went wrong...', 'Close');
              reject('erros');
            });
        });
    });

    return promise;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(PositiveNotiComponent, {
      horizontalPosition: 'end',
      data: message,
      verticalPosition: 'top',
      duration: 6000,
    });
  }
}
