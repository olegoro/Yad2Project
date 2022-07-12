import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CitiesService } from 'src/app/shared/cities.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-publish-asset-address',
  templateUrl: './publish-asset-address.component.html',
  styleUrls: ['./publish-asset-address.component.css'],
  providers: [CitiesService],
})
export class PublishAssetAddressComponent implements OnInit {
  isOpened = false;

  publishAssetFormControl: FormControl = new FormControl();

  assets = [
    'דירה',
    'דירת גן',
    'בית פרטי/קוטג',
    'גג פנטהאוס',
    'מגרשים',
    'דופלקס',
    'דירת נופש',
    'דו משפחתי',
    'מרטף/פרטר',
    'טריפלקס',
    'יחידת דיור',
    'משק חקלאי/נחלה',
    'משק עזר',
    'דיור מוגן',
    'בניין מגורים',
    'סטודיו/לופט',
    'מחסן',
    'חניה',
    'קב` רכישה/זכות לנכס',
    'כללי',
  ];

  cities: { city: string; street: string }[] = [];

  filteredCities: Observable<{ city: string; street: string }[]>;

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.citiesService.cities;
    this.filteredCities = this.publishAssetFormControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );
  }

  filter(val: string): { city: string; street: string }[] {
    console.log(val);
    return this.cities.filter((option) =>
      option.city.toLowerCase().includes(val.toLowerCase())
    );
  }

  openAccordion() {
    this.isOpened = true;
  }

  clearCityInputText(
    cityInput: HTMLInputElement,
    streetField: HTMLDivElement,
    streetInput: HTMLInputElement
  ) {
    cityInput.value = '';
    this.enableStreetField(false, streetField);
    this.clearStreetInputText(streetInput);
  }

  clearStreetInputText(
    streetInput: HTMLInputElement,
    newsCheckboxContainer?: HTMLDivElement,
    houseNumberContainer?: HTMLDivElement,
    houseNumberInput?: HTMLInputElement
  ) {
    streetInput.value = '';
    if (newsCheckboxContainer != undefined) {
      this.enableNewsCheckbox(false, newsCheckboxContainer);
    }

    if (houseNumberContainer != undefined && houseNumberInput != undefined) {
      this.enableHouseNumber(false, houseNumberContainer, houseNumberInput);
    }
  }

  onCityInputKeyup(
    cityInput: HTMLInputElement,
    streetField: HTMLDivElement,
    streetInput: HTMLInputElement
  ) {
    if (cityInput.value.length === 0) {
      this.enableStreetField(false, streetField);
      this.clearStreetInputText(streetInput);
    }
  }

  onCityClick(streetField: HTMLDivElement) {
    this.enableStreetField(true, streetField);
  }

  onStreetInputKeyup(
    streetInput: HTMLInputElement,
    newsCheckboxContainer: HTMLDivElement,
    houseNumberContainer: HTMLDivElement,
    houseNumberInput: HTMLInputElement
  ) {
    if (streetInput.value.length === 0) {
      this.enableNewsCheckbox(false, newsCheckboxContainer);
      this.enableHouseNumber(false, houseNumberContainer, houseNumberInput);
    }
  }

  onStreetClick(
    newsCheckboxContainer: HTMLDivElement,
    houseNumberContainer: HTMLDivElement
  ) {
    this.enableNewsCheckbox(true, newsCheckboxContainer);
    this.enableHouseNumber(true, houseNumberContainer);
  }

  private enableHouseNumber(
    enable: boolean,
    houseNumberContainer: HTMLDivElement,
    houseNumberInput?: HTMLInputElement
  ) {
    if (enable) {
      if (houseNumberContainer.classList.contains('disabled')) {
        houseNumberContainer.classList.remove('disabled');
      }
    } else {
      if (!houseNumberContainer.classList.contains('disabled')) {
        houseNumberContainer.classList.add('disabled');
        houseNumberInput.value = '';
      }
    }
  }

  letMaxFourDigits(houseNumber: HTMLInputElement) {
    return houseNumber.value.length < 4;
  }

  private enableNewsCheckbox(
    enable: boolean,
    newsCheckboxContainer: HTMLDivElement
  ) {
    let newsCheckbox = newsCheckboxContainer.getElementsByClassName('checkbox');
    let newsCheckboxTitle =
      newsCheckboxContainer.getElementsByClassName('checkboxTitle');

    if (enable) {
      if (newsCheckboxContainer.classList.contains('disabled')) {
        newsCheckboxContainer.classList.remove('disabled');
      }

      if (newsCheckbox[0].classList.contains('checkboxDisabled')) {
        newsCheckbox[0].classList.remove('checkboxDisabled');
      }

      if (newsCheckboxTitle[0].classList.contains('checkboxTitleDisabled')) {
        newsCheckboxTitle[0].classList.remove('checkboxTitleDisabled');
      }
    } else {
      if (!newsCheckboxContainer.classList.contains('disabled')) {
        newsCheckboxContainer.classList.add('disabled');
      }

      if (!newsCheckbox[0].classList.contains('checkboxDisabled')) {
        newsCheckbox[0].classList.add('checkboxDisabled');
        if (newsCheckbox[0].classList.contains('clickedCheckboxBackground')) {
          newsCheckbox[0].classList.remove('clickedCheckboxBackground');
        }
      }

      if (!newsCheckboxTitle[0].classList.contains('checkboxTitleDisabled')) {
        newsCheckboxTitle[0].classList.add('checkboxTitleDisabled');
      }
    }
  }

  private enableStreetField(enable: boolean, streetField: HTMLDivElement) {
    if (enable) {
      if (streetField.classList.contains('disabled')) {
        streetField.classList.remove('disabled');
      }
    } else {
      if (!streetField.classList.contains('disabled')) {
        streetField.classList.add('disabled');
      }
    }
  }
}
