import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//shared
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
