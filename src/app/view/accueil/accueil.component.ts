import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation/index';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
