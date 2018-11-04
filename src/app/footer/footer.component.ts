import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerTitle = 'Need something doing or just fancy a chat? ';

  constructor() { }

  ngOnInit() {
  }

}
