import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  isHoveringRealEstate = false;
  isHoveringCars = false;
  isHoveringYad2 = false;
  isHoveringBusiness = false;
  isHoveringProfession = false;
  isHoveringBusinessRealEstate = false;
  isHoveringMobile = false;
  isHoveringFurniture = false;
  isHoveringTourism = false;
  isHoveringFashion = false;
  isHoveringPets = false;
  isHoveringBaby = false;
  isHoveringStudent = false;
  isHoveringDrushim = false;
  isPopupClosed = true;

  constructor() {}

  ngOnInit(): void {}

  onMouseenter(event) {
    switch (event.target.children[0].id) {
      case 'realestateSVG':
        this.isHoveringRealEstate = true;
        break;
      case 'vehicleSVG':
        this.isHoveringCars = true;
        break;
      case 'yad2SVG':
        this.isHoveringYad2 = true;
        break;
      case 'businessSVG':
        this.isHoveringBusiness = true;
        break;
      case 'professionSVG':
        this.isHoveringProfession = true;
        break;
      case 'businessRealEstateSVG':
        this.isHoveringBusinessRealEstate = true;
        break;
      case 'mobileSVG':
        this.isHoveringMobile = true;
        break;
      case 'furnitureSVG':
        this.isHoveringFurniture = true;
        break;
      case 'tourismSVG':
        this.isHoveringTourism = true;
        break;
      case 'fashionSVG':
        this.isHoveringFashion = true;
        break;
      case 'petsSVG':
        this.isHoveringPets = true;
        break;
      case 'babySVG':
        this.isHoveringBaby = true;
        break;
      case 'studentSVG':
        this.isHoveringStudent = true;
        break;
      case 'drushimSVG':
        this.isHoveringDrushim = true;
        break;
    }
  }

  onMouseleave(event) {
    switch (event.target.children[0].id) {
      case 'realestateSVG':
        this.isHoveringRealEstate = false;
        break;
      case 'vehicleSVG':
        this.isHoveringCars = false;
        break;
      case 'yad2SVG':
        this.isHoveringYad2 = false;
        break;
      case 'businessSVG':
        this.isHoveringBusiness = false;
        break;
      case 'professionSVG':
        this.isHoveringProfession = false;
        break;
      case 'businessRealEstateSVG':
        this.isHoveringBusinessRealEstate = false;
        break;
      case 'mobileSVG':
        this.isHoveringMobile = false;
        break;
      case 'furnitureSVG':
        this.isHoveringFurniture = false;
        break;
      case 'tourismSVG':
        this.isHoveringTourism = false;
        break;
      case 'fashionSVG':
        this.isHoveringFashion = false;
        break;
      case 'petsSVG':
        this.isHoveringPets = false;
        break;
      case 'babySVG':
        this.isHoveringBaby = false;
        break;
      case 'studentSVG':
        this.isHoveringStudent = false;
        break;
      case 'drushimSVG':
        this.isHoveringDrushim = false;
        break;
    }
  }

  closePopup() {
    this.isPopupClosed = true;
  }

  openPopup() {
    this.isPopupClosed = false;
  }
}
