import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ContactInfo } from '../contact-info-form/contact-info-form.component';
import { MyTel } from '../contact-info-form/components/tele-input/tele-input.component';

@Component({
  selector: 'app-mobile-contact-info-form',
  templateUrl: './mobile-contact-info-form.component.html',
  styleUrls: ['./mobile-contact-info-form.component.scss'],
})
export class MobileContactInfoFormComponent implements OnInit {
  badSubmit: boolean = false;
  form: FormGroup = new FormGroup({
    firstname: new FormControl(this.dataBS.firstname, [Validators.required]),
    lastname: new FormControl(this.dataBS.lastname, [Validators.required]),
    org: new FormControl(this.dataBS.org),
    tel: new FormControl(new MyTel('', '', '')),
    email: new FormControl(this.dataBS.email, [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required]),
  });
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public dataBS: ContactInfo,
    private _bottomSheetRef: MatBottomSheetRef<MobileContactInfoFormComponent>,
    private deviceService: DeviceDetectorService,
    private fs: AngularFirestore
  ) {}
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
    this._bottomSheetRef.dismiss();
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
          this._bottomSheetRef.dismiss(user);
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
                resolve(item);
              }
            })
            .catch(() => {
              reject('erros');
            });
        });
    });

    return promise;
  }
}
