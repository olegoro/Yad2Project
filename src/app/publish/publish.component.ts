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
  isPopupClosed = true;
  @ViewChild('realEstate') el: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onMouseenter(event) {
    // console.log(event.target.children[0].id);
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
    }
  }

  closePopup() {
    this.isPopupClosed = true;
  }

  openPopup() {
    this.isPopupClosed = false;
  }
}
