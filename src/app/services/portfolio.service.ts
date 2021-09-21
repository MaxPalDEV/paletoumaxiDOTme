import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class PortfolioService{

  portfolioSubject = new Subject<any[]>();

  private portfolios = [
    {
      id: 1,
      name: "Portfolio 1",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 2,
      name: "Portfolio 1",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 3,
      name: "Portfolio 1",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
  ];

  emitPortfolioSubject(){
    this.portfolioSubject.next(this.portfolios.slice());
  }

  getPortfolioById(id: number){
    const portfolio = this.portfolios.find(
      (portfolioObject) => {
        return portfolioObject.id === id
      }
    );
    return portfolio
  }
}
