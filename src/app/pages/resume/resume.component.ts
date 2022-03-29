import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('inOutAnimate', [
      transition(':enter', [
        style({ opacity: 0, top: '55%' }),
        animate('250ms ease-in-out', style({ opacity: 1, top: '50%' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, top: '50%' }), //apply default styles before animation starts
        animate('170ms ease-in-out', style({ opacity: 0, top: '55%' })),
      ]),
    ]),
  ],
})
export class ResumeComponent implements OnInit {
  show = 'invisible';

  constructor() {}

  ngOnInit(): void {}

  saveResume() {
    const resumePDF = '../../../assets/resume_winter_2021.pdf';
    const resumeName = 'landon_messmer_resume';
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(resumePDF, resumeName);
  }
}
