import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle = false;
  currentY: any;
  currentX: any;

  constructor() { }

  ngOnInit() {
  }

  toggleNav(open) {
    if(open){
      document.getElementById("mySidenav").style.width = "100%";
      window.addEventListener('scroll', this.noscroll);
    } else {
      document.getElementById("mySidenav").style.width = "0";
      window.removeEventListener('scroll', this.noscroll);
    }
    
  }

  noscroll() {
    // window.scrollTo({
    //   top: this.currentY,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }





}
