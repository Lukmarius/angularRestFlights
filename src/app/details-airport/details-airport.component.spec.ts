import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAirportComponent } from './details-airport.component';

describe('DetailsAirportComponent', () => {
  let component: DetailsAirportComponent;
  let fixture: ComponentFixture<DetailsAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
