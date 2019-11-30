import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListItemComponent } from './components/invoice/invoice-list-item/invoice-list-item.component';
import { InvoiceDialogComponent } from './components/invoice-dialog/invoice-dialog.component';
import { InvoiceDialogInformationComponent } from './components/invoice-dialog-information/invoice-dialog-information.component';
import { InvoiceDialogPaymentsComponent } from './components/invoice-dialog-payments/invoice-dialog-payments.component';
import { InvoiceDialogInformationDesktopComponent } from './components/invoice-dialog-information/invoice-dialog-information-desktop/invoice-dialog-information-desktop.component';
import { InvoiceDialogInformationMobileComponent } from './components/invoice-dialog-information/invoice-dialog-information-mobile/invoice-dialog-information-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListItemComponent,
    InvoiceDialogComponent,
    InvoiceDialogInformationComponent,
    InvoiceDialogPaymentsComponent,
    InvoiceDialogInformationDesktopComponent,
    InvoiceDialogInformationMobileComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
