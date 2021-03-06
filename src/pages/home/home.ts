import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  body = "";
  to = "";
  subject = "";
  constructor(private emailComposer : EmailComposer) {

  }
  send(){
    let email ={
      to : this.to,
      cc : [],
      bcc : [],
      attachment : [],
      subject : this.subject,
      body : this.body,
      isHtml: false,
      app : "Gmail"
    }
    this.emailComposer.open(email);
  }
}
