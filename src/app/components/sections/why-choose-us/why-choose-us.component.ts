import { Component, OnInit } from '@angular/core';
import { featureCard } from 'src/app/_models/featureCard';
import {faGem} from '../../../../../node_modules/@fortawesome/free-regular-svg-icons'
import {faLanguage,faVectorSquare} from '.././../../../../node_modules/@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {
cards:featureCard[]
gemIcon=faGem
langIcon=faLanguage
squareIcon=faVectorSquare
  constructor() { }
  clientsNumber=0;
  projectsNumber=0;
  hoursOfSupport=0;
  hardWorkers=0;
  ngOnInit(): void {
    this.cards=[
    {id:1,icon:this.gemIcon,text_title:"corporis dolorem",text_paraghraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry."},
    {id:2,icon:this.langIcon,text_title:"voluoptates dolores",text_paraghraph:"It is a long established fact that a reader will be distracted by the readable content of a page."},
    {id:3,icon:this.squareIcon,text_title:"Eum ut aspernature",text_paraghraph:"Various versions have evolved over the years,sometimes by accident, sometimes on purpose."},
  ]
 setInterval(() => {
   if(this.clientsNumber<274)
    this.clientsNumber++;
  if(this.projectsNumber<421)
    this.projectsNumber++;
  if(this.hoursOfSupport<1364)
    this.hoursOfSupport++;
  if(this.hardWorkers<18)
    this.hardWorkers++;
  }, 100);
  }

}
