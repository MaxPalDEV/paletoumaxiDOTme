import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faCode, faLink, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-single-item-portfolio',
  templateUrl: './single-item-portfolio.component.html',
  styleUrls: ['./single-item-portfolio.component.scss'],
  /*animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }*/
})
export class SingleItemPortfolioComponent implements OnInit {

  // Fontawesome Icons
  technoIcon = faCode;
  siteIcon = faLink;
  returnIcon = faArrowAltCircleLeft;

  // Members
  name: string = "nom";
  techno: string = "technologies utilisées";
  description!: string | null;
  imgSlides: any[] = [];

  constructor(private portfolioService: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.portfolioService.getPortfolioById(+id)?.name!;
    var doc = new DOMParser().parseFromString(this.portfolioService.getPortfolioById(+id)?.description!, "text/html");
    this.description = doc.documentElement.textContent;
    this.techno = this.portfolioService.getPortfolioById(+id)?.technos!;
    this.imgSlides = this.portfolioService.getPortfolioById(+id)?.libraryImages!;
  }

}
