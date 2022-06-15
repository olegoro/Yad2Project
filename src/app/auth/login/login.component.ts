import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() subscribeClicked = new EventEmitter<boolean>();

  hidePassword = true;

  constructor(private _location: Location) {}

  ngOnInit(): void {}

  onSubscribeClick() {
    this.subscribeClicked.emit(true);
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

  backClicked() {
    this._location.back();
  }
}
