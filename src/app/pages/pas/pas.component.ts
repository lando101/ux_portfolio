import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.scss'],
})
export class PasComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}

  ngOnInit(): void {}
}
