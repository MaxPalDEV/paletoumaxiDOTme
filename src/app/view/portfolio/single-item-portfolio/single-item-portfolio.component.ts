import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faCode, faLink, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { PortfolioImage } from 'src/app/models/portfolioImages';
import { Subscription } from 'rxjs';
import { Portfolio } from 'src/app/models/portfolio';

@Component({
  selector: 'app-single-item-portfolio',
  templateUrl: './single-item-portfolio.component.html',
  styleUrls: ['./single-item-portfolio.component.scss'],
  /*animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }*/
})
export class SingleItemPortfolioComponent implements OnInit, OnDestroy {

  // Fontawesome Icons
  technoIcon = faCode;
  siteIcon = faLink;
  returnIcon = faArrowAltCircleLeft;

  public portfolioImages: PortfolioImage[] = [];
  private portfolioImagesSub!: Subscription;

  public portfolio: Portfolio = {
    id : 0,
    name: "",
    logo:"",
    technos: "",
    description: ""
  }

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.portfolioService.getPortfolioById(id).then(
      (data: any) => {
        this.portfolio = data[0];
      }
    )

    this.portfolioImagesSub = this.portfolioService.portfolioImages$.subscribe(
      (portfolioImage) => {
        this.portfolioImages = portfolioImage;
        console.log("images:");
        console.log(this.portfolioImages);
      }
    )
    this.portfolioService.getImagePortfolioById(id);
  }

  ngOnDestroy(): void {
    this.portfolioImagesSub.unsubscribe();
  }

}
