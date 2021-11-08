import { Component, Input, OnInit } from '@angular/core';

export interface Quote {
  title?: string;
  comment?: string;
  role?: string;
  name?: string;
  date?: string;
  large?: boolean;
  color?: string;
}
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  @Input() quote: Quote;
  constructor() {}

  ngOnInit(): void {}
}
