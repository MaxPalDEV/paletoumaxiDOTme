import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portfolio } from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
/*animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }*/
})
export class PortfolioComponent implements OnInit, OnDestroy {

  //INIT des propriétés
  public portfolio: Portfolio[] = [];
  private portfolioSub!: Subscription;
  public loading = false;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loading = true;
    this.portfolioSub = this.portfolioService.portfolio$.subscribe(
      (portfolio) => {
        this.portfolio = portfolio;
      }
    )
    this.portfolioService.getAllPortfolio();
    this.loading = false;
  }

  ngOnDestroy(): void {
    this.portfolioSub.unsubscribe();
  }

}
