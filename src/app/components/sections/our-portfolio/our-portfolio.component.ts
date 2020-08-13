import { Component, OnInit } from '@angular/core';
import { roundedBtn } from 'src/app/_models/roundedBtn';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.scss']
})
export class OurPortfolioComponent implements OnInit {
  AllBtn:roundedBtn
  AppBtn:roundedBtn
  cardBtn:roundedBtn
  webBtn:roundedBtn
  constructor() { }

  ngOnInit(): void {
    this.AllBtn={id:1,borderColor:"transparent",bgColor:"#427BFF",text:"ALL",fontSize:"0.9vw",horizontallyPadding:"1.4vw",verticallyPadding:"0.5vw"}
    this.AppBtn={id:2,borderColor:"transparent",bgColor:"#ECF5FF",text:"APP",color:"#427BFF",fontSize:"0.9vw",horizontallyPadding:"1.4vw",verticallyPadding:"0.5vw"}
    this.cardBtn={id:3,borderColor:"transparent",bgColor:"#ECF5FF",text:"CARD",color:"#427BFF",fontSize:"0.9vw",horizontallyPadding:"1.4vw",verticallyPadding:"0.5vw"}
    this.webBtn={id:4,borderColor:"transparent",bgColor:"#ECF5FF",text:"WEB",color:"#427BFF",fontSize:"0.9vw",horizontallyPadding:"1.4vw",verticallyPadding:"0.5vw"}

  }

}
