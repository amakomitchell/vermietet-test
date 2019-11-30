import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDialogPaymentsComponent } from './invoice-dialog-payments.component';

describe('InvoicePaymentsComponent', () => {
  let component: InvoiceDialogPaymentsComponent;
  let fixture: ComponentFixture<InvoiceDialogPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDialogPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
