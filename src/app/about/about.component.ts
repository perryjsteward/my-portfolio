import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutTitle = "Perry - freelance product designer and front end developer, focusing on user experiences & web applications.";
  aboutSubtitle = "I’m Perry Steward, a twenty-eight-year-old designer and developer  living in London.";

  constructor() { }

  ngOnInit() {
  }

}
