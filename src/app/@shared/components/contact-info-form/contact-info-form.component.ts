import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyTel } from './components/tele-input/tele-input.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PositiveNotiComponent } from '../notifications/positive-noti/positive-noti.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ContactInfoService } from '@app/services/contact-info.service';

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
    private _snackBar: MatSnackBar,
    private deviceService: DeviceDetectorService,
    private contactInfoService: ContactInfoService
  ) {} // @Inject(MAT_DIALOG_DATA) public data: ContactInfo // public dialogRef: MatDialogRef<ContactInfoFormComponent>,
  desktop: boolean = this.deviceService.isDesktop();
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
      if (this.desktop) {
        document.getElementsByClassName('animate__animated')[0].classList.add('animate__backOutUp');
      }
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
    const contact: ContactInfo = {
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
      this.contactInfoService
        .sendToDB(contact)
        .then((response: any) => {
          resolve(response);
        })
        .catch(() => {
          reject('errors');
        });
    });

    return promise;
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.openFromComponent(PositiveNotiComponent, {
  //     horizontalPosition: 'end',
  //     data: message,
  //     verticalPosition: 'top',
  //     duration: 6000,
  //   });
  // }
}
