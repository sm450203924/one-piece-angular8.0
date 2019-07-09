import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotDetailComponent } from './plot-detail.component';

describe('PlotDetailComponent', () => {
  let component: PlotDetailComponent;
  let fixture: ComponentFixture<PlotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
