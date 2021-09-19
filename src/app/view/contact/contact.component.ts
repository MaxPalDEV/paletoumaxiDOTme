import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation/index';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
