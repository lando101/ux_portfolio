import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '@app/pages/home/home.component';
import * as moment from 'moment';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() skills: Skills;
  constructor() {}

  ngOnInit(): void {}
}
