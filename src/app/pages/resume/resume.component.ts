import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveResume() {
    const resumePDF = '../../../assets/resume_winter_2021.pdf';
    const resumeName = 'landon_messmer_resume';
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    saveAs(resumePDF, resumeName);
  }
}
