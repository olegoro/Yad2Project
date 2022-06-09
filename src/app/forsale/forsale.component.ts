import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

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
  isWithPriceFilteringCheckboxChecked = false;
  isWithPictureFilteringCheckboxChecked = false;

  private isClickedOutside = true;

  constructor(private renderer: Renderer2) {}

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

  onWithPriceFilterCheckboxClick() {
    this.isWithPriceFilteringCheckboxChecked =
      !this.isWithPriceFilteringCheckboxChecked;
  }

  onWithPictureFilterCheckboxClick() {
    this.isWithPictureFilteringCheckboxChecked =
      !this.isWithPictureFilteringCheckboxChecked;
  }

  sortByRadioButtonClick(
    sortByRadioButton: HTMLDivElement,
    uncheckedRadioButton1: HTMLDivElement,
    uncheckedRadioButton2: HTMLDivElement,
    sortingDropdownValue: HTMLSpanElement
  ) {
    this.onCheckSortingRadioButton(
      sortByRadioButton,
      uncheckedRadioButton1,
      uncheckedRadioButton2,
      sortingDropdownValue
    );
  }

  private setSortingDropdownValue(
    sortByRadioButton: HTMLDivElement,
    sortingDropdownValue: HTMLSpanElement
  ) {
    sortingDropdownValue.innerText = sortByRadioButton.parentElement.innerText;
  }

  private onCheckSortingRadioButton(
    sortByRadioButton: HTMLDivElement,
    uncheckedRadioButton1: HTMLDivElement,
    uncheckedRadioButton2: HTMLDivElement,
    sortingDropdownValue: HTMLSpanElement
  ) {
    if (!sortByRadioButton.classList.contains('checkedRadioButtonBorder')) {
      this.renderer.addClass(sortByRadioButton, 'checkedRadioButtonBorder');
      this.renderer.addClass(
        sortByRadioButton.children[0],
        'pointInRadioButton'
      );

      this.setSortingDropdownValue(sortByRadioButton, sortingDropdownValue);

      if (
        uncheckedRadioButton1.classList.contains('checkedRadioButtonBorder')
      ) {
        this.uncheckSortingRadioButton(uncheckedRadioButton1);
      } else {
        this.uncheckSortingRadioButton(uncheckedRadioButton2);
      }
    }
  }

  private uncheckSortingRadioButton(uncheckedRadioButton: HTMLDivElement) {
    this.renderer.removeClass(uncheckedRadioButton, 'checkedRadioButtonBorder');
    this.renderer.removeClass(
      uncheckedRadioButton.children[0],
      'pointInRadioButton'
    );
  }
}
