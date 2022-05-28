import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Renderer2,
} from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  @Input() isOpenedAdvancedSearch = false;
  @Output() apartmentPropertyClicked = new EventEmitter<number>();
  numberOfAdvancedSearchSelections: number = 0;
  isApartmentPropertyChecked = false;

  isFromDropdownOpened = false;
  isToDropdownOpened = false;

  isDropdownOpened = false;

  apartmentSizeFrom: string = '';
  apartmentSizeTo: string = '';
  isApartmentSizeFromEmpty = true;
  isApartmentSizeToEmpty = true;

  isEntranceDateInputEmpty = true;

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

  floorsFrom = [...this.advancedStoriesAmountValues];
  floorsTo = [...this.advancedStoriesAmountValues];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onApartmentPropertyCheck(apartmentProperty: HTMLDivElement) {
    this.isApartmentPropertyChecked = apartmentProperty
      .querySelector('.checkbox')
      .classList.contains('clickedCheckboxBackground');

    this.numberOfAdvancedSearchSelections = this.isApartmentPropertyChecked
      ? this.numberOfAdvancedSearchSelections + 1
      : this.numberOfAdvancedSearchSelections - 1;

    this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
  }

  //************************************** */

  onFloorValueClick(
    selectedInput: HTMLInputElement,
    secondInput: HTMLInputElement,
    selectedFloor: any
  ) {
    this.updateNumberOfSelectionsOnSelectingFloor(
      selectedInput,
      secondInput,
      selectedFloor
    );

    this.setDropdownSelectedFloorValue(
      selectedInput,
      secondInput,
      selectedFloor
    );
    this.setCorrectFloorsValuesToDropdownList(
      selectedInput,
      secondInput,
      selectedFloor
    );
  }

  private updateNumberOfSelectionsOnSelectingFloor(
    selectedInput: HTMLInputElement,
    secondInput: HTMLInputElement,
    selectedFloor: any
  ) {
    if (
      (secondInput.value === '' || secondInput.value === 'הכל') &&
      (selectedInput.value === '' || selectedInput.value === 'הכל') &&
      selectedFloor != '' &&
      selectedFloor != 'הכל'
    ) {
      this.numberOfAdvancedSearchSelections++;
    } else if (
      selectedInput.value !== 'הכל' &&
      selectedInput.value !== '' &&
      (secondInput.value === 'הכל' || secondInput.value === '') &&
      (selectedFloor === '' || selectedFloor === 'הכל')
    ) {
      this.numberOfAdvancedSearchSelections--;
    }

    this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
  }

  private setCorrectFloorsValuesToDropdownList(
    selectedInput: HTMLInputElement,
    secondInput: HTMLInputElement,
    selectedFloor: any
  ) {
    if (selectedInput.id === 'inputFromDropdown') {
      this.setSecondDropdownInputAndItsValues(
        this.floorsTo,
        secondInput,
        selectedFloor
      );
    } else {
      this.setSecondDropdownInputAndItsValues(
        this.floorsFrom,
        secondInput,
        selectedFloor
      );
    }
  }

  private setSecondDropdownInputAndItsValues(
    floors: string[],
    secondInput: HTMLInputElement,
    selectedFloor: any
  ) {
    if (floors.includes(secondInput.value) || secondInput.value === '') {
      if (selectedFloor !== 'הכל') {
        this.updateDropdownList(selectedFloor, secondInput);
      } else {
        if (secondInput.id === 'inputFromDropdown') {
          this.floorsFrom = [...this.advancedStoriesAmountValues];
        } else {
          this.floorsTo = [...this.advancedStoriesAmountValues];
        }
      }
    } else {
      if (selectedFloor === 'הכל') {
        secondInput.value = '';
      }
    }
  }

  private updateDropdownList(
    selectedFloor: any,
    secondInput: HTMLInputElement
  ) {
    if (secondInput.id === 'inputToDropdown') {
      this.floorsTo = this.advancedStoriesAmountValues.slice(
        this.advancedStoriesAmountValues.indexOf(selectedFloor)
      );

      this.floorsTo.unshift('הכל');
    } else {
      this.floorsFrom = this.advancedStoriesAmountValues.slice(
        0,
        this.advancedStoriesAmountValues.indexOf(selectedFloor) + 1
      );
    }
  }

  private setDropdownSelectedFloorValue(
    selectedValueInput: HTMLInputElement,
    secondInput: HTMLInputElement,
    floor: any
  ) {
    selectedValueInput.value = floor;

    this.isDropdownOpened = false;

    if (secondInput.value === 'הכל') {
      secondInput.value = '';
    }
  }

  //********************************** */

  onApartmentSizeFromValueEntered(apartmentSizeFrom) {
    if (this.isApartmentSizeFromEmpty && apartmentSizeFrom !== '') {
      if (this.isApartmentSizeToEmpty) {
        this.numberOfAdvancedSearchSelections++;
      }
      this.isApartmentSizeFromEmpty = false;
      this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
    } else if (!this.isApartmentSizeFromEmpty && apartmentSizeFrom === '') {
      if (this.isApartmentSizeToEmpty) {
        this.numberOfAdvancedSearchSelections--;
      }
      this.isApartmentSizeFromEmpty = true;
      this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
    }

    this.apartmentSizeFrom = apartmentSizeFrom;
  }
  onApartmentSizeToValueEntered(apartmentSizeTo) {
    if (this.isApartmentSizeToEmpty && apartmentSizeTo !== '') {
      if (this.isApartmentSizeFromEmpty) {
        this.numberOfAdvancedSearchSelections++;
      }

      this.isApartmentSizeToEmpty = false;
      this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
    } else if (!this.isApartmentSizeToEmpty && apartmentSizeTo === '') {
      if (this.isApartmentSizeFromEmpty) {
        this.numberOfAdvancedSearchSelections--;
      }
      this.isApartmentSizeToEmpty = true;
      this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
    }

    this.apartmentSizeTo = apartmentSizeTo;
  }

  openDatepicker(datepicker: MatDatepicker<Date>) {
    datepicker.open();
  }

  addOneToNumberOfAdvancedSelections() {
    if (this.isEntranceDateInputEmpty) {
      this.numberOfAdvancedSearchSelections++;
      this.apartmentPropertyClicked.emit(this.numberOfAdvancedSearchSelections);
      this.isEntranceDateInputEmpty = false;
    }
  }
}
