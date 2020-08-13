import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { Testimonial } from 'src/app/_models/testimonial';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials
  constructor(public testimonialServ:TestimonialService) {
    this.testimonials=[]
   }

  ngOnInit(): void {
    this.testimonialServ.getAll().then((data)=>{this.testimonials=data["data"]})
    console.log(this.testimonials)
  }

}
