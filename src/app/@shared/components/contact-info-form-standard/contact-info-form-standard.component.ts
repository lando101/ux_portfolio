import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ContactInfoService } from '@app/services/contact-info.service';
import { ContactInfo } from '../contact-info-form/contact-info-form.component';
import { MyTel } from '../contact-info-form/components/tele-input/tele-input.component';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contact-info-form-standard',
  templateUrl: './contact-info-form-standard.component.html',
  styleUrls: ['./contact-info-form-standard.component.scss'],
})
export class ContactInfoFormStandardComponent implements OnInit {
  badSubmit: boolean = false;
  contactInfo: ContactInfo = {};

  form: FormGroup = new FormGroup({
    firstname: new FormControl(this.contactInfo.firstname, [Validators.required]),
    lastname: new FormControl(this.contactInfo.lastname, [Validators.required]),
    org: new FormControl(this.contactInfo.org),
    tel: new FormControl(new MyTel('', '', '')),
    email: new FormControl(this.contactInfo.email, [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required]),
  });
  constructor(
    private fs: AngularFirestore,
    private contactInfoService: ContactInfoService,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit(): void {
    this.contactInfoService.$contactInfo.subscribe((contact: ContactInfo) => {
      if (contact) {
        this.contactInfo = contact;
      }
    });
  }

  getErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      return 'Email is required';
    }

    this.form.errors;

    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit() {
    if (this.form.valid) {
      this.badSubmit = false;
      // document.getElementById('formdialog').classList.add('animate__backOutUp');
      if (this.deviceService.isDesktop()) {
        // document.getElementsByClassName('animate__animated')[0].classList.add('animate__backOutUp');
      }
      this.sendToDB().then((user) => {
        // setTimeout(() => {
        //   this.dialogRef.close(user);
        // }, 470);
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
}
