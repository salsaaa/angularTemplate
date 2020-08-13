import { Component, OnInit } from '@angular/core';
import {faCircle,faImage} from '@fortawesome/free-regular-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  circleIcon = faCircle;
  bagIcon=faShoppingBag;
  imgIcon=faImage
  constructor() { }

  ngOnInit(): void {
  }

}
