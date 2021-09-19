import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faEnvelopeOpen, faHome } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // Icônes FontaAwesome
  PortfolioIcon = faLaptopCode;
  ContactIcon = faEnvelopeOpen;
  HomeIcon = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
