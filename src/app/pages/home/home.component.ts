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

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    const scrollPosition = (event.target as Document).documentElement.scrollTop;
    const headerMovable = this.container.nativeElement.querySelector('.header-movable');
    const headerHint = this.container.nativeElement.querySelector('.header-hint');
    const headerBalance = this.container.nativeElement.querySelector('.header-balance');

    const newPosition = 70 - (scrollPosition * 0.4); // Example: Reduce by 0.3% per pixel scrolled
    const hintNewFontSize = 14 - (scrollPosition * 0.3); // Example: Reduce by 0.3% per pixel scrolled
    const balanceNewFontSize = 32 - (scrollPosition * 0.3); // Example: Reduce by 0.3% per pixel scrolled

    // Ensure the new position stays within bounds
    if (newPosition >= 36) {
      headerMovable.style.top = `${newPosition}%`;
    } else {
      headerMovable.style.top = '36%';
    }
    
    if (hintNewFontSize >= 0) {
      headerHint.style.fontSize = `${hintNewFontSize}px`;
    } else {
      headerHint.style.fontSize = '0px';
    }

    if (balanceNewFontSize >= 18) {
      headerBalance.style.fontSize = `${balanceNewFontSize}px`;
    } else {
      headerBalance.style.fontSize = '18px';
    }
  }
}
