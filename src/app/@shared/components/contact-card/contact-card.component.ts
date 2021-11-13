import { Component, OnInit } from '@angular/core';
import { VCard } from 'ngx-vcard';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  public vCard: VCard = {
    name: {
      firstNames: 'Landon',
      lastNames: 'Messmer',
    },
  };
  constructor() {}

  ngOnInit(): void {}

  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return {
      name: { firstNames: 'Landon', lastNames: 'Messmer' },
      gender: { sex: 'M' },
      organization: 'Booz Allen Hamilton',
      title: 'UX Engineer',
      email: ['landon.messmerjmu@gmail.com'],
      url: 'https://uxlcm.com/home',
      telephone: ['412-360-4941'],
      address: [{ countryName: 'United States', locality: 'Virginia', street: 'Arlington' }],
      photo:
        'https://firebasestorage.googleapis.com/v0/b/cryptoliov2.appspot.com/o/landon_image.jpg?alt=media&token=16ebf32f-77b3-4103-be59-80f68a581054',
    };
  };
}
