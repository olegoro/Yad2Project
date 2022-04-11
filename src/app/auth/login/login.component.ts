import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() subscribeClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onSubscribeClick() {
    this.subscribeClicked.emit(true);
  }
}
