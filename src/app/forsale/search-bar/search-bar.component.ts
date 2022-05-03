import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  priceFrom: string = '';
  isPlusInCircle = true;

  numberOfRooms = [
    'הכל',
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '12.5',
  ];

  advancedStoriesAmountValues = [
    'הכל',
    'מרתף/פרטר',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ];

  advancedSearchCheckboxData = [
    'חניה',
    'מעלית',
    'מיזוג',
    'מרפסת',
    'ממ"ד',
    'סורגים',
    'מחסן',
    'גישה לנכים',
    'משופצת',
    'מרוהטת',
    'בבלעדיות',
  ];

  constructor() {}

  ngOnInit(): void {}

  onAdvancedSearchButtonClick() {
    this.isPlusInCircle = !this.isPlusInCircle;
  }

  keyPressNumbers(event) {
    let price = event.which ? event.which : event.keyCode;
    let typedValue: string = event.target.value;

    if (typedValue === '0') {
      this.priceFrom = '';
    }
    // Only Numbers 0-9
    if (price < 48 || price > 57) {
      this.priceFrom = typedValue.substring(0, typedValue.length - 1);
      return false;
    } else if (typedValue.length <= 10) {
      if (typedValue.length <= 7) {
        if (typedValue.length >= 4) {
          typedValue = typedValue.replace(',', '');

          this.priceFrom =
            typedValue.substring(0, typedValue.length - 3) +
            ',' +
            typedValue.substring(typedValue.length - 3);
        }
      } else {
        typedValue = typedValue.replace(/,/g, '');

        this.priceFrom =
          typedValue.substring(0, typedValue.length - 6) +
          ',' +
          typedValue.substring(typedValue.length - 6, typedValue.length - 3) +
          ',' +
          typedValue.substring(typedValue.length - 3);
      }

      return true;
    } else {
      this.priceFrom = typedValue.substring(0, typedValue.length - 1);
    }
  }
}
