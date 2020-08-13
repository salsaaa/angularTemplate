import { Component, OnInit } from '@angular/core';
import {faTwitter} from '.././../../../../node_modules/@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '.././../../../../node_modules/@fortawesome/free-brands-svg-icons'
import {faInstagram} from '.././../../../../node_modules/@fortawesome/free-brands-svg-icons'
import {faGooglePlusG} from '.././../../../../node_modules/@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '.././../../../../node_modules/@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
twitterIcon=faTwitter
faceBookIcon=faFacebookF
instaIcon=faInstagram
googlePlusIcon=faGooglePlusG
linkedinIcon=faLinkedinIn
  constructor() { }

  ngOnInit(): void {
  }

}
