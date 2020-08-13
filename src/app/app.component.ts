import { Component } from '@angular/core';
import {TestimonialService} from './services/testimonial.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(testimonialSer:TestimonialService) {
      testimonialSer.getTestimonialsFromServer();
      
    }
  title = 'aphrie-task';
}
