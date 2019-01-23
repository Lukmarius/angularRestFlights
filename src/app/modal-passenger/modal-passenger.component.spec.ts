import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPassengerComponent } from './modal-passenger.component';

describe('ModalPassengerComponent', () => {
  let component: ModalPassengerComponent;
  let fixture: ComponentFixture<ModalPassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
