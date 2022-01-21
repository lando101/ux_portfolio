import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.scss'],
})
export class ColorSwatchComponent implements OnInit {
  @Input() color: string;
  @Input() textColor: string;
  constructor() {}

  ngOnInit(): void {}
}
