import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ContactInfo } from '@app/@shared/components/contact-info-form/contact-info-form.component';
import { ContactInfoService } from '@app/services/contact-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentUrl: string;
  onProject: boolean;
  @Input() scrollUp: boolean;
  contactInfo: ContactInfo;
  btnString: string;
  constructor(public router: Router, private contactInfoService: ContactInfoService) {}

  ngOnInit() {
    // console.log('init', this.router.url);
    this.detectProjectUrl();
    this.contactInfoService.$btnText.subscribe((text: string) => {
      this.btnString = text;
    });
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((route: any) => {
      if (route instanceof NavigationEnd) {
        this.detectProjectUrl();
      }
    });
  }

  detectProjectUrl() {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    if (this.currentUrl.search('projects') === 1) {
      // console.log(this.currentUrl.search('projects'));
      this.onProject = true;
    } else {
      this.onProject = false;
    }
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  openDialog(): void {
    this.contactInfoService.openDialog();
  }
}
