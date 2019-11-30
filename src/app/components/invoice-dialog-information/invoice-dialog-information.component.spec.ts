import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDialogInformationComponent } from './invoice-dialog-information.component';

describe('InvoiceInformationComponent', () => {
  let component: InvoiceDialogInformationComponent;
  let fixture: ComponentFixture<InvoiceDialogInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDialogInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDialogInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
