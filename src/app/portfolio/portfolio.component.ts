import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  pageTitle = 'Freelance Designer and <Coder>';
  pageSubtitle = 'Based in London, UK';

  projects = {
    'metisLabs': {
      'title': 'Metis Labs - AI',
      'subTitle': 'UI Design & Development',
      'img': './assets/portfolio-images/metis-labs-colour.png'
    },
    'virginTrains': {
      'title': 'Virgin Trains',
      'subTitle': 'Digital Innovation Team',
      'img': './assets/portfolio-images/virgin-trains-colour.png'
    },
    'bboxx': {
      'title': 'BBOXX - Solar Revolution',
      'subTitle': 'Delivery Lead & UX Developer',
      'img': './assets/portfolio-images/bboxx-colour.png'
    },
    'ge': {
      'title': 'General Electric',
      'subTitle': 'Digital Technology Leadership Program',
      'img': './assets/portfolio-images/ge-colour.png'
    },
  }


  constructor() { }

  ngOnInit() {
  }

}
