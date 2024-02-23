import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  activeTab: number = 0;
  sections: any = [
    {
      identifier: 'my-cards',
      title: 'My Cards',
      buttonTitle: '+ Get a Card',
      cards: [
        {
          name: 'My Mastercard in GEL',
          icon: 'georgia',
          type: 'mastercard',
          expirationDate: '06/25',
          balance: '₾ 2,562.52',
          cardNumber: '**** 2124',
        },
        {
          name: 'My VISA in EUR',
          icon: 'european-union',
          type: 'visa',
          expirationDate: '06/25',
          balance: '€ 562.52',
          cardNumber: '**** 2124',
        },
      ],
    },
    {
      identifier: 'collecting-funds',
      title: 'Collecting Funds',
      cards: [
        {
          name: 'My Startup Donations',
          icon: 'startup',
          type: 'mastercard',
          backgroundImage: true,
          donations: '50',
          donationsAmount: '562.52',
          donationsVolume: '800.00',
        },
      ],
    },
    {
      identifier: 'other',
      title: 'Other',
      buttonTitle: '+ Link',
      cards: [
        {
          name: 'My TBC Card',
          icon: 'tbc',
          type: 'mastercard',
          expirationDate: '06/25',
          cardNumber: '**** 2124',
          accountNumber: 'TBGB12341213412345678',
        },
        {
          name: 'My BOG Card',
          icon: 'bog',
          type: 'visa',
          expirationDate: '06/25',
          cardNumber: '**** 2124',
          accountNumber: 'BOGB12341213412345678',
        },
        {
          name: 'My TBC Account',
          icon: 'tbc',
          accountNumber: 'TBGB12341213412345678',
          otherTypeCardBalanceEuro: '55.60',
          otherTypeCardBalanceGel: '136.22',
        },
      ],
    },
  ];
  
  @ViewChild('container') container!: ElementRef;

  getElement(className: string) {
    return this.container.nativeElement.querySelector(`.${className}`);
  }

  
  // Function for element property reduce smoothly while scrolled
  reduceElementProperty(
    scrollPosition: number,
    element: any,
    propertyName: string,
    initialProperty: number,
    lastProperty: number,
    ratio: number,
    propertyType?: string
    ) {
    const newProperty = initialProperty - (scrollPosition * ratio);

    if (newProperty >= lastProperty) {
      element.style[propertyName] =  propertyType ? `${newProperty}${propertyType}` : newProperty;
    } else {
      element.style[propertyName] = propertyType ? `${lastProperty}${propertyType}`: lastProperty;
    }
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    const scrollPosition = (event.target as Document).documentElement.scrollTop;
    const movable = this.getElement('header-movable');
    const hint = this.getElement('header-hint');
    const balance = this.getElement('header-balance');

    // Reduce movable element position top smoothly from 70% to 36% while scrolled
    this.reduceElementProperty(scrollPosition, movable, 'top', 70, 36, 0.5, '%');
    
    // Reduce header hint element font size from 14px to 0px and opacity from 1 to 0 smoothly while scrolled
    this.reduceElementProperty(scrollPosition, hint, 'fontSize', 14, 0, 0.3, 'px');
    this.reduceElementProperty(scrollPosition, hint, 'opacity', 1, 0, 0.15);
 
    // Reduce header balance element font size from 32px to 18px smoothly while scrolled
    this.reduceElementProperty(scrollPosition, balance, 'fontSize', 32, 18, 0.3, 'px');
  }
}
