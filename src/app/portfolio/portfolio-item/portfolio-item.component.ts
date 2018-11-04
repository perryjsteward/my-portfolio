import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() alignRight: boolean = false;
  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
