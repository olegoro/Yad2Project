import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/shared/cities.service';

@Component({
  selector: 'app-publish-asset-address',
  templateUrl: './publish-asset-address.component.html',
  styleUrls: ['./publish-asset-address.component.css'],
  providers: [CitiesService],
})
export class PublishAssetAddressComponent implements OnInit {
  isOpened = false;

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

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.citiesService.cities;
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
    // if (!streetField.classList.contains('disabled')) {
    //   streetField.classList.add('disabled');
    // }
    this.enableStreetField(false, streetField);
    this.clearStreetInputText(streetInput);
  }

  clearStreetInputText(
    streetInput: HTMLInputElement,
    newsCheckboxContainer?: HTMLDivElement
  ) {
    streetInput.value = '';

    this.enableNewsCheckbox(false, newsCheckboxContainer);
  }

  // enableStreetField(streetField: HTMLDivElement) {
  //   // console.log(streetField);

  //   if (streetField.classList.contains('disabled')) {
  //     streetField.classList.remove('disabled');
  //   }
  // }

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
    newsCheckboxContainer: HTMLDivElement
  ) {
    if (streetInput.value.length === 0) {
      this.enableNewsCheckbox(false, newsCheckboxContainer);
    }
    // else {
    //   this.enableNewsCheckbox(true, newsCheckboxContainer);
    // }
  }

  onStreetClick(newsCheckboxContainer: HTMLDivElement) {
    // let newsCheckbox = newsCheckboxContainer.getElementsByClassName('checkbox');
    // let newsCheckboxTitle =
    //   newsCheckboxContainer.getElementsByClassName('checkboxTitle');
    // if (newsCheckboxContainer.classList.contains('disabled')) {
    //   newsCheckboxContainer.classList.remove('disabled');
    // }
    // if (newsCheckbox[0].classList.contains('checkboxDisabled')) {
    //   newsCheckbox[0].classList.remove('checkboxDisabled');
    // }
    // if (newsCheckboxTitle[0].classList.contains('checkboxTitleDisabled')) {
    //   newsCheckboxTitle[0].classList.remove('checkboxTitleDisabled');
    // }

    this.enableNewsCheckbox(true, newsCheckboxContainer);
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
