import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-forsale',
  templateUrl: './forsale.component.html',
  styleUrls: ['./forsale.component.css'],
})
export class ForsaleComponent implements OnInit {
  isRoomsFromArrowDown = true;
  isRoomsToArrowDown = true;
  isPlusInCircle = true;
  isStoriesFromArrowDown = true;
  isStoriesToArrowDown = true;

  private isClickedOutside = true;

  constructor() {}

  ngOnInit(): void {}

  onRoomsMenuFromButtonClick() {
    this.isRoomsFromArrowDown = !this.isRoomsFromArrowDown;

    if (!this.isRoomsToArrowDown) {
      this.isRoomsToArrowDown = true;
    }
  }

  onRoomsMenuToButtonClick() {
    this.isRoomsToArrowDown = !this.isRoomsToArrowDown;

    if (!this.isRoomsFromArrowDown) {
      this.isRoomsFromArrowDown = true;
    }
  }

  onStoriesFromArrowClick() {
    this.isStoriesFromArrowDown = !this.isStoriesFromArrowDown;
  }

  onStoriesToArrowClick() {
    this.isStoriesToArrowDown = !this.isStoriesToArrowDown;
  }
}
