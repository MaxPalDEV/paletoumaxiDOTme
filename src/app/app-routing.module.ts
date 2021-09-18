import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './view/accueil/accueil.component';
import { ContactComponent } from './view/contact/contact.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contact', component:ContactComponent},
  {path:'', component:AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
