import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListItemsComponent } from './components/invoice/invoice-list-items/invoice-list-items.component';
import { InvoiceTableHeaderComponent } from './components/invoice/invoice-table-header/invoice-table-header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListItemsComponent,
    InvoiceTableHeaderComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
