import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPopUpComponent } from './pay-pop-up.component';

describe('PayPopUpComponent', () => {
  let component: PayPopUpComponent;
  let fixture: ComponentFixture<PayPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
