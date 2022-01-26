import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

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
  constructor(public router: Router) {}

  ngOnInit() {
    // console.log('init', this.router.url);
    this.detectProjectUrl();
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
}
