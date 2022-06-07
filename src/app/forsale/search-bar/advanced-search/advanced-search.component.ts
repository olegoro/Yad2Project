import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Renderer2,
  HostListener,
  ElementRef,
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
  @Output() advancedSearchNewDataAdded = new EventEmitter<number>();
  numberOfAdvancedSearchSelections: number = 0;
  isApartmentPropertyChecked = false;

  // isFloorFromDropdownOpened = false;
  // isFloorToDropdownOpened = false;

  isFloorFromEmpty = true;
  isFloorToEmpty = true;

  isDropdownOpened = false;

  apartmentSizeFrom: string = '';
  apartmentSizeTo: string = '';
  isApartmentSizeFromEmpty = true;
  isApartmentSizeToEmpty = true;

  isEntranceDateInputEmpty = true;

  isEmptyFreeSearch = true;

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

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  onApartmentPropertyCheck(apartmentProperty: HTMLDivElement) {
    this.isApartmentPropertyChecked = apartmentProperty
      .querySelector('.checkbox')
      .classList.contains('clickedCheckboxBackground');

    this.numberOfAdvancedSearchSelections = this.isApartmentPropertyChecked
      ? this.numberOfAdvancedSearchSelections + 1
      : this.numberOfAdvancedSearchSelections - 1;

    this.advancedSearchNewDataAdded.emit(this.numberOfAdvancedSearchSelections);
  }

  //************************************** */

  onFloorFromKeyPress(floorFrom: HTMLInputElement, floorTo: HTMLInputElement) {
    let floorFromValue = floorFrom.value;
    let floorToValue = floorTo.value;

    this.updateNumberOfSelectionsOnFloorInputKeyPress(floorFrom, floorTo);

    this.floorsFrom = [...this.advancedStoriesAmountValues].filter((x) =>
      x.includes(floorFromValue)
    );

    // this.floorsFrom = [...this.floorsTo].filter((x) =>
    //   x.includes(floorFromValue)
    // );

    this.setCorrectFloorsValuesToDropdownList(
      floorFrom,
      floorTo,
      floorFromValue
    );

    // if (floorFromValue !== '' && floorToValue === '') {
    //   this.numberOfAdvancedSearchSelections++;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // } else if (floorFromValue === '' && floorToValue === '') {
    //   this.numberOfAdvancedSearchSelections--;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // }

    // if (floorFromValue !== '' && this.isFloorFromEmpty) {
    //   this.numberOfAdvancedSearchSelections++;
    //   this.isFloorFromEmpty = !this.isFloorFromEmpty;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // } else if (floorFromValue === '' && !this.isFloorFromEmpty) {
    //   this.numberOfAdvancedSearchSelections--;
    //   this.isFloorFromEmpty = !this.isFloorFromEmpty;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // }
  }

  onFloorToKeyPress(floorTo: HTMLInputElement, floorFrom: HTMLInputElement) {
    let floorToValue = floorTo.value;

    this.updateNumberOfSelectionsOnFloorInputKeyPress(floorTo, floorFrom);

    this.floorsTo = [...this.advancedStoriesAmountValues].filter((x) =>
      x.includes(floorToValue)
    );

    // this.floorsTo = [...this.floorsFrom].filter((x) =>
    //   x.includes(floorToValue)
    // );

    this.setCorrectFloorsValuesToDropdownList(floorTo, floorFrom, floorToValue);

    // if (floorToValue !== '' && this.isFloorToEmpty) {
    //   this.numberOfAdvancedSearchSelections++;
    //   this.isFloorToEmpty = !this.isFloorToEmpty;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // } else if (floorToValue === '' && !this.isFloorToEmpty) {
    //   this.numberOfAdvancedSearchSelections--;
    //   this.isFloorToEmpty = !this.isFloorToEmpty;
    //   this.advancedSearchNewDataAdded.emit(
    //     this.numberOfAdvancedSearchSelections
    //   );
    // }
  }

  private updateNumberOfSelectionsOnFloorInputKeyPress(
    selectedInput: HTMLInputElement,
    secondInput: HTMLInputElement
  ) {
    let selectedValue = selectedInput.value;
    let secondValue = secondInput.value;

    if (selectedValue !== '' && secondValue === '') {
      this.numberOfAdvancedSearchSelections++;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    } else if (selectedValue === '' && secondValue === '') {
      this.numberOfAdvancedSearchSelections--;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    }
  }

  onFloorFromArrowClick(floorFrom, floorTo) {
    //this.floorsFrom = [...this.advancedStoriesAmountValues];
    let floorFromValue = floorFrom.value;
    this.setCorrectFloorsValuesToDropdownList(
      floorFrom,
      floorTo,
      floorFromValue
    );
  }

  onFloorToArrowClick(floorTo, floorFrom) {
    //this.floorsTo = [...this.advancedStoriesAmountValues];
    let floorToValue = floorTo.value;
    this.setCorrectFloorsValuesToDropdownList(floorTo, floorFrom, floorToValue);
  }

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

    this.advancedSearchNewDataAdded.emit(this.numberOfAdvancedSearchSelections);
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
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    } else if (!this.isApartmentSizeFromEmpty && apartmentSizeFrom === '') {
      if (this.isApartmentSizeToEmpty) {
        this.numberOfAdvancedSearchSelections--;
      }
      this.isApartmentSizeFromEmpty = true;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    }

    this.apartmentSizeFrom = apartmentSizeFrom;
  }
  onApartmentSizeToValueEntered(apartmentSizeTo) {
    if (this.isApartmentSizeToEmpty && apartmentSizeTo !== '') {
      if (this.isApartmentSizeFromEmpty) {
        this.numberOfAdvancedSearchSelections++;
      }

      this.isApartmentSizeToEmpty = false;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    } else if (!this.isApartmentSizeToEmpty && apartmentSizeTo === '') {
      if (this.isApartmentSizeFromEmpty) {
        this.numberOfAdvancedSearchSelections--;
      }
      this.isApartmentSizeToEmpty = true;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    }

    this.apartmentSizeTo = apartmentSizeTo;
  }

  openDatepicker(datepicker: MatDatepicker<Date>) {
    datepicker.open();
  }

  addOneToNumberOfAdvancedSelections(immediateEntranceCheckbox) {
    if (this.isEntranceDateInputEmpty) {
      this.numberOfAdvancedSearchSelections++;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
      this.isEntranceDateInputEmpty = false;

      if (
        immediateEntranceCheckbox.classList.contains(
          'clickedCheckboxBackground'
        )
      ) {
        // immediateEntranceCheckbox.removeClass('clickedCheckboxBackground');
        this.renderer.removeClass(
          immediateEntranceCheckbox,
          'clickedCheckboxBackground'
        );

        this.numberOfAdvancedSearchSelections--;
        this.advancedSearchNewDataAdded.emit(
          this.numberOfAdvancedSearchSelections
        );
      }
    }
  }

  checkOrUncheckImmediateEntrance(
    immediateEntranceCheckbox,
    entranceDateInput
  ) {
    if (
      immediateEntranceCheckbox.classList.contains('clickedCheckboxBackground')
    ) {
      if (entranceDateInput.value !== '') {
        entranceDateInput.value = '';
        this.isEntranceDateInputEmpty = true;
        this.numberOfAdvancedSearchSelections--;
        this.advancedSearchNewDataAdded.emit(
          this.numberOfAdvancedSearchSelections
        );
      }

      this.numberOfAdvancedSearchSelections++;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    } else {
      this.numberOfAdvancedSearchSelections--;
      this.advancedSearchNewDataAdded.emit(
        this.numberOfAdvancedSearchSelections
      );
    }
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    let advanceSearchInput = this.el.nativeElement.querySelector(
      '.advancedSearch__bottom__freeSearch_Input'
    );

    if (advanceSearchInput != null) {
      let contains = advanceSearchInput.contains(event.target);

      if (!contains) {
        if (advanceSearchInput.value !== '' && this.isEmptyFreeSearch) {
          this.numberOfAdvancedSearchSelections++;
          this.advancedSearchNewDataAdded.emit(
            this.numberOfAdvancedSearchSelections
          );
          this.isEmptyFreeSearch = false;
        } else if (advanceSearchInput.value === '' && !this.isEmptyFreeSearch) {
          this.numberOfAdvancedSearchSelections--;
          this.advancedSearchNewDataAdded.emit(
            this.numberOfAdvancedSearchSelections
          );
          this.isEmptyFreeSearch = true;
        }
      }
    }
  }
}
