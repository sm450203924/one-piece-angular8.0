import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotAddDialogComponent } from './plot-add-dialog.component';

describe('PlotAddDialogComponent', () => {
  let component: PlotAddDialogComponent;
  let fixture: ComponentFixture<PlotAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
