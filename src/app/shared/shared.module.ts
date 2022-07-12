import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { CurrencyInputDirective } from './amount-input.directive';
import { CheckboxDirective } from './checkbox.directive';
import { NumberInputDirective } from './number-input.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    CurrencyInputDirective,
    CheckboxDirective,
    NumberInputDirective,
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    CurrencyInputDirective,
    CommonModule,
    CheckboxDirective,
    NumberInputDirective,
  ],
})
export class SharedModule {}
