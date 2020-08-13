import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testimonial } from '../_models/testimonial'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonials: Testimonial[]
  testimonialUrl = 'https://reqres.in/api/users?page=1';
  constructor(private http: HttpClient) {
    this.testimonials = []
  }
  getTestimonialsFromServer() {
    this.http.get(this.testimonialUrl).subscribe((data) => {
      this.testimonials = [...data["data"]];
    });
  }
   async getAll() {
    if (this.testimonials.length === 0) {
      const testimonialss=await this.http.get(this.testimonialUrl).toPromise()
      return testimonialss
    }
    else{
      return this.testimonials;
    }
  }
  add(testimonial: Testimonial) {
    testimonial.id = this.testimonials.length + 1;
    this.testimonials.push(testimonial);
  }
  getById(id: number): Testimonial {
    id = +id;
    if (id >= 0) {
      let testimonial = this.testimonials.find(p => p.id === id);
      return testimonial;
    }

  }
  deleteById(id: number) {
    id = +id;
    let index = this.testimonials.findIndex(a => a.id === id);
    this.testimonials.splice(index, 1);
  }
  updateById(newTestimonial: Testimonial) {
    let index = this.testimonials.findIndex(a => a.id === newTestimonial.id)
    this.testimonials[index] = newTestimonial;
  }
}
