import { Component, OnInit } from '@angular/core';
import { FacebookService, FacebookLoginResponse, FacebookInitParams } from 'ng2-facebook-sdk';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [FacebookService]
})
export class HeaderComponent implements OnInit {
  constructor(private fb: FacebookService) {
  }

  onFacebookLoginClick() {
    this.fb.login().then(
      (response: FacebookLoginResponse) => console.log(response),
      (error: any) => console.error(error)
    );
  }

  ngOnInit() {
    try {
      let fbParams: FacebookInitParams = {
        appId: '276012862822084',
        xfbml: true,
        version: 'v2.8'
      };
      this.fb.init(fbParams);
    } catch (error) {

    }
  }

}
