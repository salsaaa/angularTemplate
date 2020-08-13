import { Component, OnInit ,Input} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Testimonial } from 'src/app/_models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
@Input()testimonial:Testimonial
  constructor() { }

  ngOnInit(): void {
  }

}
