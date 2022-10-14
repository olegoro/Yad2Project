import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CitiesService } from 'src/app/shared/cities.service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { PublishAssetService } from '../publish-asset.service';

@Component({
  selector: 'app-publish-asset-address',
  templateUrl: './publish-asset-address.component.html',
  styleUrls: ['./publish-asset-address.component.css'],
  providers: [CitiesService],
})
export class PublishAssetAddressComponent implements OnInit, OnDestroy {
  @Input() isOpened = false;
  autocompleteDisabled = true;
  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;

  publishAssetFormControl: FormControl = new FormControl();
  assetPublishingForm: FormGroup;
  allowedForOpening = false;
  private activatedSub: Subscription;

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

  assetConditions = [
    'חדש מקבלן (לא גרו בו בכלל)',
    'חדש (נכס בן עד 5 שנים)',
    'משופץ (שופץ ב5 השנים האחרונות)',
    'במצב שמור (במצב טוב, לא שופץ)',
    'דרוש שיפוץ (זקוק לעבודת שיפוץ)',
  ];

  cities: { city: string; street: string[] }[] = [];

  filteredCities: Observable<{ city: string; street: string[] }[]>;

  constructor(
    private citiesService: CitiesService,
    private publishAssetService: PublishAssetService
  ) {
    // publishAssetService.asssetCategoryAccordionClosed.subscribe(() => {
    //   this.isOpened = true;
    // });
    // publishAssetService.asssetCategoryAccordionOpened.subscribe((isOpened) => {
    //   this.isOpened = isOpened;
    // });
  }

  ngOnInit(): void {
    this.cities = this.citiesService.cities;
    this.setFormControls();
    this.filteredCities = this.assetPublishingForm.controls[
      'city'
    ].valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );

    this.activatedSub =
      this.publishAssetService.asssetCategoryAccordionOpened.subscribe(
        (isOpened) => {
          this.isOpened = isOpened;
        }
      );
  }

  ngOnDestroy(): void {
    // this.publishAssetService.asssetCategoryAccordionOpened.unsubscribe();
    this.activatedSub.unsubscribe();
  }

  filter(val: string): { city: string; street: string[] }[] {
    return this.cities.filter((option) =>
      option.city.toLowerCase().includes(val.toLowerCase())
    );
  }

  private setFormControls() {
    this.assetPublishingForm = new FormGroup({
      assetType: new FormControl(null, [Validators.required]),
      assetCondition: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      houseNumber: new FormControl(null, [Validators.required]),
      floor: new FormControl(null, [Validators.required]),
      numberOfFloors: new FormControl(null, [Validators.required]),
    });
  }

  openAccordion() {
    if (this.allowedForOpening) {
      this.isOpened = true;
    }
  }

  clearCityInputText(streetField: HTMLDivElement) {
    this.assetPublishingForm.get('city').setValue('');
    this.enableStreetField(false, streetField);
    this.assetPublishingForm.get('street').setValue('');
  }

  clearStreetInputText(
    streetInput: HTMLInputElement,
    newsCheckboxContainer?: HTMLDivElement,
    houseNumberContainer?: HTMLDivElement,
    houseNumberInput?: HTMLInputElement
  ) {
    this.assetPublishingForm.get('street').setValue('');

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

  letMaxFourDigits(houseNumber: HTMLInputElement) {
    return houseNumber.value.length < 4;
  }

  // form: NgForm
  onSubmit() {
    if (this.assetPublishingForm.valid) {
      this.allowedForOpening = true;
    }
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
