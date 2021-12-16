import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '@app/@shared/components/contact-info-form/contact-info-form.component';
import { ContactInfoService } from '@app/services/contact-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  contactInfo: ContactInfo;
  btnString: string;
  constructor(private contactInfoService: ContactInfoService) {}

  ngOnInit(): void {
    this.contactInfoService.$btnText.subscribe((text: string) => {
      this.btnString = text;
    });
  }

  openDialog(): void {
    this.contactInfoService.openDialog();
  }
}
