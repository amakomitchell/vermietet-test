import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListItemsComponent } from './components/invoice/invoice-list-items/invoice-list-items.component';
import { InvoiceTableHeaderComponent } from './components/invoice/invoice-table-header/invoice-table-header.component';
import { InvoiceDialogComponent } from './components/invoice-dialog/invoice-dialog.component';
import { InvoiceDialogSidebarComponent } from './components/invoice-dialog/invoice-dialog-sidebar/invoice-dialog-sidebar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { InvoiceInformationComponent } from './components/invoice-dialog/invoice-information/invoice-information.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListItemsComponent,
    InvoiceTableHeaderComponent,
    InvoiceDialogComponent,
    InvoiceDialogSidebarComponent,
    InvoiceInformationComponent,
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
