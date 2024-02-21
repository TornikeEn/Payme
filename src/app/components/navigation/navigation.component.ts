import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})

export class NavigationComponent {
  navigationItems = [
    { name: 'home', type: '.svg' },
    { name: 'activities', type: '.png' },
    { name: 'actions', type: '.svg' },
    { name: 'offers', type: '.svg' },
    { name: 'more', type: '.svg' },
  ];
}
