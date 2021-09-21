import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxPopperjsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
