import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    // ReactiveFormsModule,
    // FormsModule,
  ],
})
export class PublishModule {}
