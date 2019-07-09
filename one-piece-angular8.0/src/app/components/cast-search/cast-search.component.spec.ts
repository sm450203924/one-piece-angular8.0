import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSearchComponent } from './cast-search.component';

describe('CastSearchComponent', () => {
  let component: CastSearchComponent;
  let fixture: ComponentFixture<CastSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
