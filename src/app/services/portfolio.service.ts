import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Portfolio } from '../models/portfolio';
import { PortfolioImage } from '../models/portfolioImages';

@Injectable()
export class PortfolioService{

  constructor(private http: HttpClient) {}

  private portfolio!: Portfolio[];
  public portfolio$ = new Subject<Portfolio[]>();

  private portfolioImages!: PortfolioImage[];
  public portfolioImages$ = new Subject<PortfolioImage[]>();

  private portfolios = [];

  emitPortfolioImages(){
    this.portfolioImages$.next(this.portfolioImages);
  }

  emitPortfolio(){
    this.portfolio$.next(this.portfolio);
  }

  /**
   * Récupération de tous les items du portfolio
   */
   getAllPortfolio(){
    this.http.get('https://rest.paletoumaxi.me/webcv/getall').subscribe(
      (data: Portfolio[] | any) => {
        if (data) {
          this.portfolio = data;
          this.emitPortfolio();
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  /**
   * Récupération de l'item portfolio par son ID
   * @param id
   * @returns
   */
   getPortfolioById(id: string){
    return new Promise((resolve, reject) => {
      this.http.get('https://rest.paletoumaxi.me/webcv/' + id).subscribe(
        (response) => {
          resolve(response)
        },
        (error) => {
          reject(error);
        }
      )
    })
  }

   /**
   * Récupération des images de l'item portfolio par son ID
   * @param id
   * @returns
   */
    getImagePortfolioById(id: string){
      return new Promise((resolve, reject) => {
        this.http.get('https://rest.paletoumaxi.me/webcv/imageportfolio/' + id).subscribe(
          (response: PortfolioImage[] | any) => {
            if (response) {
              console.log(response)
              this.portfolioImages = response;
              this.emitPortfolioImages();
            }
          },
          (error) => {
            console.log(error);
          }
        )
      })
    }
}
