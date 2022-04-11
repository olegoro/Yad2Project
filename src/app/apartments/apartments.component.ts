import { Component, OnInit } from '@angular/core';
import { Apartment } from './apartment.model';
import { ApartmentService } from './apartments.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[];

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.apartments = this.apartmentService.getApartments();
  }
}
