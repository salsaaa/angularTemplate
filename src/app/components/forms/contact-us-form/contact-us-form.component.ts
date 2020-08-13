import { Component, OnInit } from '@angular/core';
import { roundedBtn } from 'src/app/_models/roundedBtn';


@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
  SendMsgBtn:roundedBtn;

  constructor() { }

  ngOnInit(): void {
    this.SendMsgBtn={id:2,borderColor:"white",bgColor:"#427BFF",text:"Send Message",fontSize:"1.1vw",verticallyPadding:"0.9vw",horizontallyPadding:"2.9vw"}

  }

}
