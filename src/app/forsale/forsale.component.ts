import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-forsale',
  templateUrl: './forsale.component.html',
  styleUrls: ['./forsale.component.css'],
  // host: {
  //   '(document:click)': 'onClick($event)',
  // },
})
export class ForsaleComponent implements OnInit {
  // isRoomsArrowDown = true;
  // isAssetArrowDown = true;
  isRoomsFromArrowDown = true;
  isRoomsToArrowDown = true;
  isPlusInCircle = true;
  // isSortArrowDown = true;
  // isApartmentsAssetArrowDown = true;
  // isHousesAssetArrowDown = true;
  // isAnotherAssetsArrowDown = true;
  isStoriesFromArrowDown = true;
  isStoriesToArrowDown = true;
  isFilterResultsDropDownShown = false;
  // apartmentAssets = [
  //   'דירות',
  //   'דירת גן',
  //   'גג/פנטהאוס',
  //   'דופלקס',
  //   'דירת נופש',
  //   'מרטף/פרטר',
  //   'טריפלקס',
  //   'יחידת דיור',
  //   'סטודיו/לופט',
  // ];

  // housesAssets = ['בית פרטי/קוטג', 'דו משפחתי', 'משק חקלאי/נחלה', 'משק עזר'];

  // anotherAssets = [
  //   'מגרשים',
  //   'דיור מוגן',
  //   'בניין מגורים',
  //   'מחסן',
  //   'חניה',
  //   'קב רכישה/זכות לנכס',
  //   'כללי',
  // ];

  // advancedSearchCheckboxData = [
  //   'חניה',
  //   'מעלית',
  //   'מיזוג',
  //   'מרפסת',
  //   'ממ"ד',
  //   'סורגים',
  //   'מחסן',
  //   'גישה לנכים',
  //   'משופצת',
  //   'מרוהטת',
  //   'בבלעדיות',
  // ];

  // advancedStoriesAmountValues = [
  //   'הכל',
  //   'מרתף/פרטר',
  //   '0',
  //   '1',
  //   '2',
  //   '3',
  //   '4',
  //   '5',
  //   '6',
  //   '7',
  //   '8',
  //   '9',
  //   '10',
  //   '11',
  //   '12',
  //   '13',
  //   '14',
  //   '15',
  //   '16',
  //   '17',
  // ];

  private isClickedOutside = true;

  constructor() {}

  ngOnInit(): void {}

  // onRoomsClick() {
  //   this.isRoomsArrowDown = !this.isRoomsArrowDown;
  // }

  // onAssetClick() {
  //   this.isAssetArrowDown = !this.isAssetArrowDown;
  // }

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

  // onAdvancedSearchButtonClick() {
  //   this.isPlusInCircle = !this.isPlusInCircle;
  // }

  // onSortDropdownClick() {
  //   this.isSortArrowDown = !this.isSortArrowDown;
  // }

  // onApartmentsAssetArrowClick() {
  //   this.isApartmentsAssetArrowDown = !this.isApartmentsAssetArrowDown;
  // }

  // onHousesAssetArrowClick() {
  //   this.isHousesAssetArrowDown = !this.isHousesAssetArrowDown;
  // }

  // onAnotherAssetsArrowClick() {
  //   this.isAnotherAssetsArrowDown = !this.isAnotherAssetsArrowDown;
  // }

  onStoriesFromArrowClick() {
    this.isStoriesFromArrowDown = !this.isStoriesFromArrowDown;
  }

  onStoriesToArrowClick() {
    this.isStoriesToArrowDown = !this.isStoriesToArrowDown;
  }

  onFilterResultsClick() {
    this.isFilterResultsDropDownShown = !this.isFilterResultsDropDownShown;
  }

  // onClick(event) {
  //   switch (event.target) {
  //   }
  // }

  // private closeAllDropdowns() {
  //   this.isRoomsArrowDown = true;
  //   this.isAssetArrowDown = true;
  //   this.isRoomsFromArrowDown = true;
  //   this.isRoomsToArrowDown = true;
  //   this.isPlusInCircle = true;
  //   this.isSortArrowDown = true;
  // }
}
