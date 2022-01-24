import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-large-image-viewer',
  templateUrl: './large-image-viewer.component.html',
  styleUrls: ['./large-image-viewer.component.scss'],
})
export class LargeImageViewerComponent implements OnChanges {
  @Input() img1: string;
  @Input() img2: string;
  @Input() video: string;
  @Input() name: string;
  @Input() desc: string;
  @Input() themeToggle = false;
  theme: boolean;
  model = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
