import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItemPortfolioComponent } from './single-item-portfolio.component';

describe('SingleItemPortfolioComponent', () => {
  let component: SingleItemPortfolioComponent;
  let fixture: ComponentFixture<SingleItemPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleItemPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleItemPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
