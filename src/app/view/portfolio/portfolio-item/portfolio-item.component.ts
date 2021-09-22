import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faTag } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  // FontAwesome Icons
  technosIcon = faTag;

  // Paramètres du component
  @Input() itemName!: string;
  @Input() itemLogo!: string;
  @Input() itemTechnos!: string;
  @Input() indexOfAppareil!: number;
  @Input() id!: number;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

}
