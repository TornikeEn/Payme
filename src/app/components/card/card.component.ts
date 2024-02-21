import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()backgroundImage: boolean = false;
  @Input()name: string = '';
  @Input()icon: string = '';
  @Input()type: string = '';
  @Input()expirationDate: string = '';
  @Input()balance: string = '';
  @Input()otherTypeCardBalanceEuro: string = '';
  @Input()otherTypeCardBalanceGel: string = '';
  @Input()accountNumber: string = '';
  @Input()cardNumber: string = '';
  @Input()donations: number = 0;
  @Input()donationsAmount: string = '';
  @Input()donationsVolume: string = '';
}
