import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @Output() loginClicked = new EventEmitter<boolean>();

  hidePassword = true;
  hidePasswordAuthentication = true;

  constructor(private _location: Location) {}

  ngOnInit(): void {}

  onLoginClick() {
    this.loginClicked.emit(false);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('The form is not valid');
      return;
    }
    console.log('The form is valid');
  }

  onPasswordEyeClick() {
    this.hidePassword = !this.hidePassword;
  }

  onAuthenticatePasswordEyeClick() {
    this.hidePasswordAuthentication = !this.hidePasswordAuthentication;
  }

  backClicked() {
    this._location.back();
  }
}
