import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/core/header/header.component';
import { RoundedBtnComponent } from './components/shared/rounded-btn/rounded-btn.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { AboutUsCardComponent } from './components/cards/about-us-card/about-us-card.component';
import { WhyChooseUsComponent } from './components/sections/why-choose-us/why-choose-us.component';
import { FeatureCardComponent } from './components/cards/feature-card/feature-card.component';
import { OurPortfolioComponent } from './components/sections/our-portfolio/our-portfolio.component';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials.component';
import { TeamComponent } from './components/sections/team/team.component';
import { TestimonialCardComponent } from './components/cards/testimonial-card/testimonial-card.component';
import { OurClientsComponent } from './components/sections/our-clients/our-clients.component';
import { ContactUsComponent } from './components/sections/contact-us/contact-us.component';
import { ContactUsFormComponent } from './components/forms/contact-us-form/contact-us-form.component';
import { FooterComponent } from './components/core/footer/footer.component';
// Services
//components
  ////auth
  ////cards
  ////features
  ////forms
  ////shared
//modules
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoundedBtnComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    WhyChooseUsComponent,
    FeatureCardComponent,
    OurPortfolioComponent,
    TestimonialsComponent,
    TeamComponent,
    TestimonialCardComponent,
    OurClientsComponent,
    ContactUsComponent,
    ContactUsFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDn62crRh7gEDxAN0n_bYK4m24LUotGepk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
