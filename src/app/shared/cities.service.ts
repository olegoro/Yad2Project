import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor() {}

  // cities: string[] = ['ארד', 'באר-שבע', 'גדרה', 'דימונה', 'הרצליה'];

  cities = [
    {
      city: 'ארד',
      street: ['הארדים', 'הרצל'],
    },
    {
      city: 'באר-שבע',
      street: ['הבארשבעים'],
    },
    {
      city: 'גדרה',
      street: ['הגדרים'],
    },
    {
      city: 'דימונה',
      street: ['הדימונאים'],
    },
    {
      city: 'הרצליה',
      street: ['ההרצליאנים'],
    },
  ];
}
