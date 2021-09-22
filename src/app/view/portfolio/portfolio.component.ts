import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
/*animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }*/
})
export class PortfolioComponent implements OnInit {

  portfolioSubscription!: Subscription;
  portfolios: any[] | undefined;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioSubscription = this.portfolioService.portfolioSubject.subscribe(
      (portfolios: any[]) => {
        this.portfolios = portfolios;
      }
    );
    this.portfolioService.emitPortfolioSubject();
  }

}
