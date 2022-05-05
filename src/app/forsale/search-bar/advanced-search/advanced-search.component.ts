import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  @Input() isOpenedAdvancedSearch = false;
  @Output() apartmentPropertyClicked = new EventEmitter<number>();
  numberOfCheckedApartmentProperties: number = 0;
  isApartmentPropertyChecked = false;

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

  onApartmentPropertyCheck(apartmentProperty: HTMLDivElement) {
    this.isApartmentPropertyChecked = apartmentProperty
      .querySelector('.checkbox')
      .classList.contains('clickedCheckboxBackground');

    this.numberOfCheckedApartmentProperties = this.isApartmentPropertyChecked
      ? this.numberOfCheckedApartmentProperties + 1
      : this.numberOfCheckedApartmentProperties - 1;

    this.apartmentPropertyClicked.emit(this.numberOfCheckedApartmentProperties);
  }
}
