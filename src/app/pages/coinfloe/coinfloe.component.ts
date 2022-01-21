import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coinfloe',
  templateUrl: './coinfloe.component.html',
  styleUrls: ['./coinfloe.component.scss'],
})
export class CoinfloeComponent implements OnInit {
  fontFamily = "'Manrope', sans-serif";
  fontName = 'Manrope';

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    document.getElementById('intro').focus();
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
