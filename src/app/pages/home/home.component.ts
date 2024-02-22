import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // window.scrollTo({ top: 0});
  }
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
    const headerHint = this.container.nativeElement.querySelector('.header-hint').classList;
    const headerBalance = this.container.nativeElement.querySelector('.header-balance').classList;
      if (scrollPosition > 0) {
        headerHint.add('header-small-hint');
        headerBalance.add('header-small-balance');
      } else {
        headerHint.remove('header-small-hint');
        headerBalance.remove('header-small-balance');
      }
  }
}
