import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isRegistration = false;

  constructor() {}

  ngOnInit(): void {}

  showSubscriptionForm(data) {
    this.isRegistration = data;
  }

  showLoginForm(data) {
    this.isRegistration = data;
  }
}
