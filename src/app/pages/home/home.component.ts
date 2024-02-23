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

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    const scrollPosition = (event.target as Document).documentElement.scrollTop;
    const movable = this.getElement('header-movable');
    const hint = this.getElement('header-hint');
    const balance = this.getElement('header-balance');

    // Reduce movable element position smoothly while scrolled
    const movableIninitalPosition = 70;
    const movableLastPosition = 36;
    const movableNewPosition = movableIninitalPosition - (scrollPosition * 0.5);

    if (movableNewPosition >= movableLastPosition) {
      movable.style.top = `${movableNewPosition}%`;
    } else {
      movable.style.top = `${movableLastPosition}%`;
    }

    // Reduce header hint element font size smoothly while scrolled
    const hintIninitalFontSize = 14;
    const hintLastFontSize = 0;
    const hintNewFontSize = hintIninitalFontSize - (scrollPosition * 0.3);
    
    if (hintNewFontSize >= hintLastFontSize) {
      hint.style.fontSize = `${hintNewFontSize}px`;
    } else {
      hint.style.fontSize = `${hintLastFontSize}px`;
    }

    // Reduce header balance element font size smoothly while scrolled
    const balanceIninitalFontSize = 32;
    const balanceLastFontSize = 18;
    const balanceNewFontSize = balanceIninitalFontSize - (scrollPosition * 0.3);
    if (balanceNewFontSize >= balanceLastFontSize) {
      balance.style.fontSize = `${balanceNewFontSize}px`;
    } else {
      balance.style.fontSize = `${balanceLastFontSize}px`;
    }
  }
}
