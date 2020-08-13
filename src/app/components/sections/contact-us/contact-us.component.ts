import { Component, OnInit } from '@angular/core';
import {faMapMarkerAlt,faPhoneAlt} from '.././../../../../node_modules/@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '.././../../../../node_modules/@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  addressIcon=faMapMarkerAlt;
  envelopeIcon=faEnvelope;
  phoneIcon=faPhoneAlt
  constructor() { }

  ngOnInit(): void {

  }

}
