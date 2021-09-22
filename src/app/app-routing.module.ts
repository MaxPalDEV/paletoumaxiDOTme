import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PortfolioGuard } from './services/guard/portfolio-guard.service';
import { AccueilComponent } from './view/accueil/accueil.component';
import { ContactComponent } from './view/contact/contact.component';
import { CvComponent } from './view/cv/cv.component';
import { PortfolioItemComponent } from './view/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { SingleItemPortfolioComponent } from './view/portfolio/single-item-portfolio/single-item-portfolio.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent, data: {animation: '1'}},
  {path:'portfolio', component:PortfolioComponent , data: {animation: '2'}},
  {path:'portfolio/:id', canActivate: [PortfolioGuard], component:SingleItemPortfolioComponent , data: {animation: '3'}},
  {path:'cv', component:CvComponent, data: {animation: '4'} },
  {path:'not-found', component:NotFoundComponent, data: {animation: '5'}},
  {path:'contact', component:ContactComponent, data: {animation: '6'}},
  {path:'', component:AccueilComponent, data: {animation: '7'}},
  {path:'**', redirectTo:'/not-found', data: {animation: '8'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
