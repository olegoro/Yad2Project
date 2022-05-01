import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-selection',
  templateUrl: './rooms-selection.component.html',
  styleUrls: ['./rooms-selection.component.css'],
})
export class RoomsSelectionComponent implements OnInit {
  isFromDropdownOpened = false;
  isToDropdownOpened = false;

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

  numberOfRoomsFrom = [...this.numberOfRooms];
  numberOfRoomsTo = [...this.numberOfRooms];

  constructor() {}

  ngOnInit(): void {}

  openOrCloseSubDropdown(isFromDropdownOpened, isToDropdownOpened) {
    this.isFromDropdownOpened = this.isFromDropdownOpened
      ? false
      : isFromDropdownOpened;
    this.isToDropdownOpened = this.isToDropdownOpened
      ? false
      : isToDropdownOpened;
  }

  openFromSubDropdown(isOpened: boolean) {
    if (!isOpened) {
      this.openOrCloseSubDropdown(true, false);
    }
  }

  openToSubDropdown(isOpened: boolean) {
    if (!isOpened) {
      this.openOrCloseSubDropdown(false, true);
    }
  }

  closeSubDropdown() {
    if (this.isFromDropdownOpened) {
      this.isFromDropdownOpened = false;
    }

    if (this.isToDropdownOpened) {
      this.isToDropdownOpened = false;
    }
  }

  private setSelectedDropdownFromValue(
    isDropdownOpened: boolean,
    dropdownInputFrom: HTMLInputElement,
    dropdownInputTo: HTMLInputElement,
    amountOfRoomsValue: any
  ) {
    this.isFromDropdownOpened = isDropdownOpened;
    dropdownInputFrom.value = amountOfRoomsValue;

    if (amountOfRoomsValue === 'הכל' && dropdownInputTo.value === 'הכל') {
      dropdownInputTo.value = '';
    }
  }

  private setRoomsDropdownTextOnFromDropdownClick(
    roomsDropdownText: HTMLSpanElement,
    amountOfRoomsValueFrom: any
  ) {
    if (
      roomsDropdownText.innerText === 'חדרים' ||
      roomsDropdownText.innerText.includes('מ')
    ) {
      roomsDropdownText.innerText = 'מ-' + amountOfRoomsValueFrom;
    } else {
      roomsDropdownText.innerText =
        amountOfRoomsValueFrom +
        ' - ' +
        roomsDropdownText.innerText.substring(
          roomsDropdownText.innerText.indexOf('-') + 1
        );
    }
  }

  private setNumberOfRoomsToToDropdown(amountOfRoomsValueFrom: any) {
    this.numberOfRoomsTo = this.numberOfRooms.slice(
      this.numberOfRooms.indexOf(amountOfRoomsValueFrom)
    );

    this.numberOfRoomsTo.unshift('הכל');
  }

  onNumberOfRoomsValueFromClick(
    dropdownInputFrom: HTMLInputElement,
    dropdownInputTo: HTMLInputElement,
    amountOfRoomsValueFrom: any,
    roomsDropdownText: HTMLSpanElement
  ) {
    this.setSelectedDropdownFromValue(
      false,
      dropdownInputFrom,
      dropdownInputTo,
      amountOfRoomsValueFrom
    );

    if (
      this.numberOfRoomsTo.includes(dropdownInputTo.value) ||
      dropdownInputTo.value === ''
    ) {
      if (amountOfRoomsValueFrom !== 'הכל') {
        this.setRoomsDropdownTextOnFromDropdownClick(
          roomsDropdownText,
          amountOfRoomsValueFrom
        );

        this.setNumberOfRoomsToToDropdown(amountOfRoomsValueFrom);
      } else {
        if (dropdownInputTo.value === '') {
          roomsDropdownText.innerText = 'חדרים';
        } else {
          roomsDropdownText.innerText = 'עד-' + dropdownInputTo.value;
        }

        this.numberOfRoomsTo = [...this.numberOfRooms];
      }
    } else {
      if (amountOfRoomsValueFrom === 'הכל') {
        dropdownInputTo.value = '';
      }
    }
  }

  private setSelectedDropdownToValue(
    isDropdownOpened: boolean,
    dropdownInputTo: HTMLInputElement,
    dropdownInputFrom: HTMLInputElement,
    amountOfRoomsValue: any
  ) {
    this.isToDropdownOpened = isDropdownOpened;
    dropdownInputTo.value = amountOfRoomsValue;

    if (amountOfRoomsValue === 'הכל' && dropdownInputFrom.value === 'הכל') {
      dropdownInputFrom.value = '';
    }
  }

  private setRoomsDropdownTextOnToDropdownClick(
    roomsDropdownText: HTMLSpanElement,
    amountOfRoomsValueTo: any
  ) {
    if (roomsDropdownText.innerText.includes('מ')) {
      roomsDropdownText.innerText =
        roomsDropdownText.innerText.substring(
          roomsDropdownText.innerText.indexOf('-') + 1
        ) +
        ' - ' +
        amountOfRoomsValueTo;
    } else if (
      roomsDropdownText.innerText.includes('עד') ||
      roomsDropdownText.innerText === 'חדרים'
    ) {
      roomsDropdownText.innerText = 'עד-' + amountOfRoomsValueTo;
    } else {
      roomsDropdownText.innerText =
        roomsDropdownText.innerText.substring(
          0,
          roomsDropdownText.innerText.indexOf('-') - 1
        ) +
        ' - ' +
        amountOfRoomsValueTo;
    }
  }

  private setNumberOfRoomsToFromDropdown(amountOfRoomsValueTo: any) {
    this.numberOfRoomsFrom = this.numberOfRooms.slice(
      0,
      this.numberOfRooms.indexOf(amountOfRoomsValueTo) + 1
    );
  }

  onNumberOfRoomsValueToClick(
    dropdownInputTo: HTMLInputElement,
    dropdownInputFrom: HTMLInputElement,
    amountOfRoomsValueTo: any,
    roomsDropdownText: HTMLSpanElement
  ) {
    this.setSelectedDropdownToValue(
      false,
      dropdownInputTo,
      dropdownInputFrom,
      amountOfRoomsValueTo
    );

    if (
      this.numberOfRoomsFrom.includes(dropdownInputFrom.value) ||
      dropdownInputFrom.value === ''
    ) {
      if (amountOfRoomsValueTo !== 'הכל') {
        this.setRoomsDropdownTextOnToDropdownClick(
          roomsDropdownText,
          amountOfRoomsValueTo
        );
        this.setNumberOfRoomsToFromDropdown(amountOfRoomsValueTo);
      } else {
        if (dropdownInputFrom.value === '') {
          roomsDropdownText.innerText = 'חדרים';
        } else {
          roomsDropdownText.innerText = 'מ-' + dropdownInputFrom.value;
        }

        this.numberOfRoomsFrom = [...this.numberOfRooms];
      }
    } else {
      if (amountOfRoomsValueTo === 'הכל') {
        dropdownInputFrom.value = '';
      }
    }
  }
}
