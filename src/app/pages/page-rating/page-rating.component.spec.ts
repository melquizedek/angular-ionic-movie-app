import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRatingComponent } from './page-rating.component';

describe('PageRatingComponent', () => {
  let component: PageRatingComponent;
  let fixture: ComponentFixture<PageRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
