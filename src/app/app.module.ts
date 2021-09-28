import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AccueilComponent } from './view/accueil/accueil.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { PortfolioItemComponent } from './view/portfolio/portfolio-item/portfolio-item.component';
import { ContactComponent } from './view/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';
import { CopyrightsComponent } from './component/header/copyrights/copyrights.component';
import {NgxPopperjsModule} from 'ngx-popperjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CvComponent } from './view/cv/cv.component';
import { PortfolioService } from './services/portfolio.service';
import { SingleItemPortfolioComponent } from './view/portfolio/single-item-portfolio/single-item-portfolio.component';
import { PortfolioGuard } from './services/guard/portfolio-guard.service';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    ContactComponent,
    HeaderComponent,
    MenuComponent,
    CopyrightsComponent,
    CvComponent,
    SingleItemPortfolioComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxPopperjsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    PortfolioService,
    PortfolioGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
