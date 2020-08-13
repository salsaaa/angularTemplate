import { Component, OnInit ,Input} from '@angular/core';
import {faGem} from '../../../../../node_modules/@fortawesome/free-regular-svg-icons'
import {faLanguage,faVectorSquare} from '.././../../../../node_modules/@fortawesome/free-solid-svg-icons'
import { featureCard } from 'src/app/_models/featureCard';
@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {
  gemIcon=faGem
  langIcon=faLanguage
  squareIcon=faVectorSquare
  @Input()card:featureCard;
  constructor() { }

  ngOnInit(): void {
  }

}
