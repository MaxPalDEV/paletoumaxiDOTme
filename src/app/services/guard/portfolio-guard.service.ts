import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PortfolioService } from "../portfolio.service";
/**
 * Permet de vérifier que l'ID retourné existe en base
 */
@Injectable()
export class PortfolioGuard implements CanActivate{

  constructor(private portfolioService: PortfolioService, private router: Router, private routesnap: ActivatedRoute){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const id = route.params.id

    if (this.portfolioService.getPortfolioById(id) != null) {
      return true;
    } else {
      this.router.navigate(['/portfolio']);
      return false;
    }
  }

}
