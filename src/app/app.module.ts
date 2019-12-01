import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceListItemComponent } from './components/invoice/invoice-list-item/invoice-list-item.component';
import { InvoiceDialogComponent } from './components/invoice-dialog/invoice-dialog.component';
import { InvoiceDialogInformationComponent } from './components/invoice-dialog-information/invoice-dialog-information.component';
import { InvoiceDialogPaymentsComponent } from './components/invoice-dialog-payments/invoice-dialog-payments.component';
import { InvoiceDialogInformationDesktopComponent } from './components/invoice-dialog-information/invoice-dialog-information-desktop/invoice-dialog-information-desktop.component';
import { InvoiceDialogInformationMobileComponent } from './components/invoice-dialog-information/invoice-dialog-information-mobile/invoice-dialog-information-mobile.component';
import { ToggleComponent } from './components/toggle/toggle.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InvoiceReducer } from './invoice.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListItemComponent,
    InvoiceDialogComponent,
    InvoiceDialogInformationComponent,
    InvoiceDialogPaymentsComponent,
    InvoiceDialogInformationDesktopComponent,
    InvoiceDialogInformationMobileComponent,
    ToggleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ appState: InvoiceReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
