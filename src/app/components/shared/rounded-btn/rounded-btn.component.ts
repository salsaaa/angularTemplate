import { Component, OnInit,Input,DoCheck } from '@angular/core';
import { roundedBtn } from 'src/app/_models/roundedBtn';

@Component({
  selector: 'app-rounded-btn',
  templateUrl: './rounded-btn.component.html',
  styleUrls: ['./rounded-btn.component.scss']
})
export class RoundedBtnComponent implements OnInit {
@Input()btn:roundedBtn
  constructor() {
  }
  
  ngOnInit(): void {
  }
  // getColor(){
  //   switch (this.textBtn) {
  //     case "Get Started":
  //       return {'background-color':"#427BFF"};
  //     case "Our Services":
  //       return {'border': '2px solid white' } 
  //       default:
  //       break;
  //   }
  // }
}
