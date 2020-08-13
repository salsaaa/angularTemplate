import { Component, OnInit } from '@angular/core';
import {roundedBtn} from '../../../_models/roundedBtn'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getStartedBtn:roundedBtn;
  ourServicesBtn:roundedBtn;
  constructor() { 
    
  }
  ngOnInit(): void {
    this.getStartedBtn={id:1,borderColor:"transparent",bgColor:"#427BFF",text:"Get Started",fontSize:"1.1vw",verticallyPadding:"0.9vw",horizontallyPadding:"2.9vw"}
    this.ourServicesBtn={id:2,borderColor:"white",bgColor:"transparent",text:"Our Services",fontSize:"1.1vw",verticallyPadding:"0.9vw",horizontallyPadding:"2.9vw"}

  }

}
