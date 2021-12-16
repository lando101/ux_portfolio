import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ContactInfo,
  ContactInfoFormComponent,
} from '@app/@shared/components/contact-info-form/contact-info-form.component';
import { MobileContactInfoFormComponent } from '@app/@shared/components/mobile-contact-info-form/mobile-contact-info-form.component';
import { PositiveNotiComponent } from '@app/@shared/components/notifications/positive-noti/positive-noti.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactInfoService {
  $contactInfo: BehaviorSubject<any> = new BehaviorSubject<ContactInfo>(null); // subscribe for crypto data
  $btnText: BehaviorSubject<any> = new BehaviorSubject<string>("Let's Team Up!");
  contactInfo: ContactInfo = {};

  constructor(
    private fs: AngularFirestore,
    private _snackBar: MatSnackBar,
    private deviceService: DeviceDetectorService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet
  ) {}

  setContactInfo(contact: ContactInfo) {
    this.contactInfo = contact;
    this.$contactInfo.next(contact);
  }

  sendToDB(contact: ContactInfo) {
    this.setContactInfo(contact);

    const promise = new Promise((resolve, reject) => {
      this.fs
        .collection('messages')
        .doc(contact.id)
        .set(contact)
        .then((data: any) => {
          this.fs
            .collection('messages')
            .doc(contact.id)
            .get()
            .toPromise()
            .then((response: any) => {
              console.log('response', response);
              if (response.exists) {
                if (this.deviceService.isDesktop()) {
                  this.$btnText.next(`Got Feedback, ${contact?.firstname}?`);
                  this.openSnackBar(
                    `${
                      contact.firstname.charAt(0).toUpperCase() + contact.firstname.slice(1)
                    }, thanks for reaching out!`,
                    'Close'
                  );
                }
                resolve(contact);
              }
            })
            .catch(() => {
              if (this.deviceService.isDesktop()) {
                this.openSnackBar('Whoops! Something went wrong...', 'Close');
              }
              reject('errors');
            });
        });
    });
    return promise;
  }

  openDialog(): void {
    if (this.deviceService.isDesktop()) {
      const dialogRef = this.dialog.open(ContactInfoFormComponent, {
        // width: '250px',
        id: 'formdialog',
        panelClass: ['animate__animated'],
        data: {
          firstname: !this.contactInfo?.firstname ? '' : this.contactInfo.firstname,
          lastname: !this.contactInfo?.lastname ? '' : this.contactInfo.lastname,
          email: !this.contactInfo?.email ? '' : this.contactInfo.email,
          date: !this.contactInfo?.date ? '' : this.contactInfo.date,
          tel: !this.contactInfo?.tel ? '' : this.contactInfo.tel,
          org: !this.contactInfo?.org ? '' : this.contactInfo.org,
          comments: '',
        },
      });

      dialogRef.afterClosed().subscribe((result: ContactInfo) => {
        console.log('The dialog was closed');
        if (result) {
          // this.name = result?.firstname || null;
          this.contactInfo = result;
          this.$contactInfo.next(result);
        }
        console.log(result);
      });
    } else {
      const bottomSheet = this._bottomSheet.open(MobileContactInfoFormComponent, {
        data: {
          firstname: !this.contactInfo?.firstname ? '' : this.contactInfo?.firstname,
          lastname: !this.contactInfo?.lastname ? '' : this.contactInfo?.lastname,
          email: !this.contactInfo?.email ? '' : this.contactInfo?.email,
          date: !this.contactInfo?.date ? '' : this.contactInfo?.date,
          tel: !this.contactInfo?.tel ? '' : this.contactInfo?.tel,
          org: !this.contactInfo?.org ? '' : this.contactInfo?.org,
          comments: '',
        },
      });
      bottomSheet.afterDismissed().subscribe((result: ContactInfo) => {
        console.log('The dialog was closed');
        if (result) {
          // this.name = result?.firstname || null;
          this.contactInfo = result;
          this.$contactInfo.next(result);
        }
        console.log(result);
      });
    }
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
