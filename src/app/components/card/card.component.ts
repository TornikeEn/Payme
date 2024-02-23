import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input()backgroundImage: boolean = false;
  @Input()name = '';
  @Input()icon = '';
  @Input()type = '';
  @Input()expirationDate = '';
  @Input()balance = '';
  @Input()otherTypeCardBalanceEuro = '';
  @Input()otherTypeCardBalanceGel = '';
  @Input()accountNumber = '';
  @Input()cardNumber = '';
  @Input()donations = 0;
  @Input()donationsAmount = '';
  @Input()donationsVolume = '';
}
