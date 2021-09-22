import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { fadeInAnimation } from '../../../animation/index';

@Component({
  selector: 'app-single-item-portfolio',
  templateUrl: './single-item-portfolio.component.html',
  styleUrls: ['./single-item-portfolio.component.scss'],
  animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class SingleItemPortfolioComponent implements OnInit {

  name: string = "nom";
  techno: string = "technologies utilisées"

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.portfolioService.getPortfolioById(+id)?.name!;
  }

}
