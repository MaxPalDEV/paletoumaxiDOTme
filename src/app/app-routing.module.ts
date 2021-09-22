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
  {path:'accueil', component:AccueilComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'portfolio/:id', canActivate: [PortfolioGuard], component:SingleItemPortfolioComponent},
  {path:'cv', component:CvComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component:AccueilComponent},
  {path:'**', redirectTo:'/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
