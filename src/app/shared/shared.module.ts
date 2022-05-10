import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { CurrencyInputDirective } from './amount-input.directive';
import { CheckboxDirective } from './checkbox.directive';

@NgModule({
  declarations: [DropdownDirective, CurrencyInputDirective, CheckboxDirective],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    CurrencyInputDirective,
    CommonModule,
    CheckboxDirective,
  ],
})
export class SharedModule {}
