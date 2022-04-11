import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    document.body.style.margin = '0';
  }

  ngOnInit(): void {}

  onAdvertiseClick() {
    // console.log('Hello');
    // this.router.navigate(['/auth']);
    // console.log('Hello');
  }
}
