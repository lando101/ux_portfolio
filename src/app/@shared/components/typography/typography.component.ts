import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnChanges {
  @Input() fontFamily: string;
  @Input() name: string;
  style: any = {};
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.style = {
      'font-family': this.fontFamily || '',
    };
  }
}
