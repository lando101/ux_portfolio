import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-positive-noti',
  templateUrl: './positive-noti.component.html',
  styleUrls: ['./positive-noti.component.scss'],
})
export class PositiveNotiComponent implements OnInit {
  constructor(
    public snackbarRef: MatSnackBarRef<PositiveNotiComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
