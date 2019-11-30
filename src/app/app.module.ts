import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListItemComponent } from './components/invoice/invoice-list-item/invoice-list-item.component';
import { InvoiceDialogComponent } from './components/invoice-dialog/invoice-dialog.component';
import { InvoiceInformationComponent } from './components/invoice-dialog/invoice-information/invoice-information.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListItemComponent,
    InvoiceDialogComponent,
    InvoiceInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
