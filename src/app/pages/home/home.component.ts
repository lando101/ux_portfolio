import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
// import { MatDialog } from '@angular/material/dialog';
import { CaseStudy } from '@app/@shared/components/case-study-card/case-study-card.component';
import {
  ContactInfo,
  ContactInfoFormComponent,
} from '@app/@shared/components/contact-info-form/contact-info-form.component';

import { MobileContactInfoFormComponent } from '@app/@shared/components/mobile-contact-info-form/mobile-contact-info-form.component';
import { Quote } from '@app/@shared/components/quotes/quotes.component';
import { ContactInfoService } from '@app/services/contact-info.service';

export interface Skills {
  title?: string;
  desc?: string;
  img_url?: string;
  duration?: string;
  experience?: string;
  icon_classes?: string[];
  images?: string[];
  cert?: string[];
  fulltime?: string;
  client?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  deviceInfo: DeviceInfo = null;
  name: string;
  contactInfo: ContactInfo;
  btnString: string;

  skills: Skills[] = [
    {
      title: 'UX Engineer',
      experience: '06-01-2019',
      duration: '2.5 Years',
      desc: 'Putting customers at the center of application design creates experiences that keep them coming back. That is why my approach is to include users at all stages of the design process. Their feedback is what informs my designs. Frequently I conduct usability studies, conduct user research and always advocate for the users.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_user_flow_re_bvfx.svg?alt=media&token=a3d8e058-2d8c-4f00-b28d-d90ba4358001',
      icon_classes: ['fab fa-figma', 'fab fa-accessible-icon'],
      cert: [
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2Fnng-uxc-badge.png?alt=media&token=b25e8f3d-ad27-4517-9633-a44ca98877b8',
      ],
      fulltime: 'Full-time',
      client: 'U.S. Gov',
    },
    {
      title: 'UI Designer',
      experience: '05-01-2018',
      duration: '4 Years',
      desc: 'Customers expect to interact with clean, polished, aesthetically pleasing designs. Good user interfaces may never recieve praise but bad ones stick out like a sore thumb. I take pride in creating UIs that bring joy. Building micro-interactions, creating digestiable content layouts, and using splashes of color are just a few ways that help me achieve this goal.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_design_feedback_re_8gtk.svg?alt=media&token=41b974db-4f89-4585-a477-00df57627d14',
      icon_classes: [],
      cert: [],
      fulltime: 'Full-time',
      client: 'U.S. Gov',
    },
    {
      title: 'Front-End Developer',
      experience: '08-01-2019',
      duration: '1.5 Years',
      desc: 'Front-end applications need to be maintainable, scalable and built with other developers in mind. My expereince in building well documented modular components using modern JavaScript frameworks such as Angular has made this possible. I try to program defensively to prevent errors and write consise code for future OM efforts.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_developer_activity_re_39tg.svg?alt=media&token=2d8685f9-58d7-4af3-a08a-27fcb8255049',
      icon_classes: [],
      cert: [],
      fulltime: 'Part-time',
      client: 'BAH',
    },
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'OPAS Portal',
      desc: 'An enterprise grade application for managing workflows for a user based of over 5,000 users.',
      skills: ['UX/UI Design', 'UX Research', 'UI Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/opas/general/opas-transparent-no-tilt.png',
      href: '/projects/pas',
      orientation: 'right',
      alt: 'Image of process automation application on desktop in light and dark mode',
      nda: true,
      caseStudy: true,
      public: true,
    },
    {
      title: 'Global4Sight',
      desc: 'A sources management application that aggregates sources, standardizes citations, automates source packets and more.',
      skills: ['UX/UI Design', 'UX Research', 'UI/Front-End Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/g4s/general/g4s_transparent.png',
      href: '/projects/g4s',
      orientation: 'right',
      alt: 'Image of process automation application on desktop in light and dark mode',
      nda: true,
      caseStudy: true,
      public: true,
    },
    {
      title: 'Coinfloe',
      desc: 'A full-featured crypto currency web application built for exploring the crypto landscape.',
      skills: ['UX/UI Design', 'UI/Front-End Development'],
      img_url: 'https://ux-portfolio-lcm.s3.amazonaws.com/coinfloe/general/coinfloe_ad_transparent_no_tilt.png',
      href: '/projects/coinfloe',
      orientation: 'left',
      alt: 'Image of coinfloe application on desktop and mobile',
      nda: false,
      caseStudy: true,
      public: true,
    },
    {
      title: 'Forecaster',
      desc: 'An exprimental weather application with dynamic weather animations based on current conditions.',
      skills: ['UX/UI', 'Front-end Developer', 'Angular'],
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2Fforecaster.png?alt=media&token=49a1d12b-2733-4266-b091-3787eec6fb85',
      href: '/projects/forecaster',
      orientation: 'right',
      alt: 'Image of forecaster application on mobile',
      nda: false,
      caseStudy: false,
      public: false,
    },
  ];

  quotes: Quote[] = [
    {
      title: 'Flexibility',
      comment:
        "Landon has been proactive about getting the tools and equipment he needs to move forward on his UI designs. [...] I appreciate Landon's willingness to pivot on projects as needed by the changing dictates of the client requirements. His flexibility and can-do attitude are saving the day!",
      role: 'Associate at Booz Allen Hamilton',
      name: 'Teresa Lowen',
      large: false,
      color: '#fb4b6e',
    },
    {
      title: 'Leadership',
      comment:
        'Landon is an incredibly goal oriented individual with significant computer based skills. He is an exceptional team leader and has the ability to motivate others to do their best work. Landon always goes above and beyond the original goal to produce the best quality work possible.',
      role: 'Team Lead at Knucklepuck',
      name: 'Julia Andrews',
      large: true,
      color: '#ffa500',
    },
    {
      title: 'Initiative',
      comment:
        '[Landon is] providing significant impact to the customer and across the team, taking a lead role with UX/UI support and helping to shape and scope the next years’ worth of work. Thank you for all that you do!',
      role: 'Chief Technologist at Booz Allen Hamilton',
      name: 'Andrew Lyboldt',
      large: false,
      color: '#6c63ff',
    },
  ];

  quote: string | undefined;
  isLoading = false;

  constructor(
    private deviceService: DeviceDetectorService,
    public dialog: MatDialog,
    private _bottomSheet: MatBottomSheet,
    private contactInfoService: ContactInfoService
  ) {}
  desktop: boolean = this.deviceService.isDesktop();

  ngOnInit() {
    this.isLoading = true;
    this.epicFunction();

    this.contactInfoService.$btnText.subscribe((text: string) => {
      this.btnString = text;
    });
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet); // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
  // openDialog(): void {
  //   if (this.desktop) {
  //     const dialogRef = this.dialog.open(ContactInfoFormComponent, {
  //       // width: '250px',
  //       id: 'formdialog',
  //       panelClass: ['animate__animated'],
  //       data: {
  //         firstname: !this.contactInfo?.firstname ? '' : this.contactInfo.firstname,
  //         lastname: !this.contactInfo?.lastname ? '' : this.contactInfo.lastname,
  //         email: !this.contactInfo?.email ? '' : this.contactInfo.email,
  //         date: !this.contactInfo?.date ? '' : this.contactInfo.date,
  //         tel: !this.contactInfo?.tel ? '' : this.contactInfo.tel,
  //         org: !this.contactInfo?.org ? '' : this.contactInfo.org,
  //         comments: '',
  //       },
  //     });

  //     dialogRef.afterClosed().subscribe((result: ContactInfo) => {
  //       console.log('The dialog was closed');
  //       if (result) {
  //         this.name = result?.firstname || null;
  //         this.contactInfo = result;
  //       }
  //       console.log(result);
  //     });
  //   } else {
  //     const bottomSheet = this._bottomSheet.open(MobileContactInfoFormComponent, {
  //       data: {
  //         firstname: !this.contactInfo?.firstname ? '' : this.contactInfo?.firstname,
  //         lastname: !this.contactInfo?.lastname ? '' : this.contactInfo?.lastname,
  //         email: !this.contactInfo?.email ? '' : this.contactInfo?.email,
  //         date: !this.contactInfo?.date ? '' : this.contactInfo?.date,
  //         tel: !this.contactInfo?.tel ? '' : this.contactInfo?.tel,
  //         org: !this.contactInfo?.org ? '' : this.contactInfo?.org,
  //         comments: '',
  //       },
  //     });
  //     bottomSheet.afterDismissed().subscribe((result: ContactInfo) => {
  //       console.log('The dialog was closed');
  //       if (result) {
  //         this.name = result?.firstname || null;
  //         this.contactInfo = result;
  //       }
  //       console.log(result);
  //     });
  //   }
  // }

  openDialog(): void {
    this.contactInfoService.openDialog();
  }
}
