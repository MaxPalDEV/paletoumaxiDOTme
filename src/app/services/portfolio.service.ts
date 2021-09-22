import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class PortfolioService{

  portfolioSubject = new Subject<any[]>();

  private portfolios = [
    {
      id: 1,
      name: "GASPRA V2",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 2,
      name: "Portfolio 2",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 3,
      name: "Portfolio 3",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 4,
      name: "Portfolio 4",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 5,
      name: "Portfolio 4",
      logo: " ",
      technos: "HTML,CSS,JS"
    },
    {
      id: 6,
      name: "Portfolio 4",
      logo: " ",
      technos: "HTML,CSS,JS"
    }
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
