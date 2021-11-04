import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { CaseStudy } from '@app/@shared/components/case-study-card/case-study-card.component';
import {
  ContactInfo,
  ContactInfoFormComponent,
} from '@app/@shared/components/contact-info-form/contact-info-form.component';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

export interface Skills {
  title?: string;
  desc?: string;
  img_url?: string;
  experience?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;
  contactInfo: ContactInfo;
  skills: Skills[] = [
    {
      title: 'UX Design',
      experience: '06-01-2019',
      desc: 'Putting customers at the center of application design creates experiences that keep them coming back. That is why my approach is to include users at all stages of the design process. Their feedback is what informs my designs. Frequently I conduct usability studies, conduct user research and always advocate for the users.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_user_flow_re_bvfx.svg?alt=media&token=a3d8e058-2d8c-4f00-b28d-d90ba4358001',
    },
    {
      title: 'UI Design',
      experience: '05-01-2018',
      desc: 'Customers expect to interact with clean, polished, aesthetically pleasing designs. Good user interfaces may never recieve praise but bad ones stick out like a sore thumb. I take pride in creating UIs that bring joy. Building micro-interactions, creating digestiable content layouts, and using splashes of color are just a few ways that help me achieve this goal.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_design_feedback_re_8gtk.svg?alt=media&token=41b974db-4f89-4585-a477-00df57627d14',
    },
    {
      title: 'Front-End Development',
      experience: '08-01-2019',
      desc: 'Front-end applications need to be maintainable, scalable and built with other developers in mind. My expereince in building well documented modular components using modern JavaScript frameworks such as Angular has made this possible. I try to program defensively to prevent errors and write consise code for future OM efforts.',
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/illustrations%2Fundraw_developer_activity_re_39tg.svg?alt=media&token=2d8685f9-58d7-4af3-a08a-27fcb8255049',
    },
  ];

  caseStudies: CaseStudy[] = [
    {
      title: 'Process Automation System',
      desc: 'An enterprise grade application for managing workflows.',
      skills: ['UX/UI', 'UX Engineer', 'Angular'],
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2Fpas_image.png?alt=media&token=4a0dc5de-d5ed-4740-9f18-a82dd10601bc',
      href: '/pas',
      orientation: 'right',
      alt: 'Image of process automation application on desktop in light and dark mode',
      caseStudy: true,
    },
    {
      title: 'Coinfloe',
      desc: 'A full-featured crypto currency web application built for exploring the crypto landscape.',
      skills: ['UX/UI', 'Front-end Developer', 'API Developer', 'Angular'],
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2Fcoinfloe_image.png?alt=media&token=a81dc3b2-5afe-4d78-b7cf-179213c8ebbd',
      href: '/coinfloe',
      orientation: 'left',
      alt: 'Image of coinfloe application on desktop and mobile',
      caseStudy: true,
    },
    {
      title: 'Forecaster',
      desc: 'An exprimental weather application with dynamic weather animations based on current conditions.',
      skills: ['UX/UI', 'Front-end Developer', 'Angular'],
      img_url:
        'https://firebasestorage.googleapis.com/v0/b/ux-portfolio-8fc64.appspot.com/o/website_images%2Fforecaster.png?alt=media&token=49a1d12b-2733-4266-b091-3787eec6fb85',
      href: '/forecaster',
      orientation: 'right',
      alt: 'Image of forecaster application on mobile',
      caseStudy: false,
    },
  ];

  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService, public dialog: MatDialog) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
  openDialog(): void {
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
      this.name = result.firstname;
      this.contactInfo = result;
      console.log(result);
    });
  }
}
