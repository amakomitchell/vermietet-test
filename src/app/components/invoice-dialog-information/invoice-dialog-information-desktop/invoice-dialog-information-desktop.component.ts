import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store'; 
import { Subscription } from 'rxjs';
import { InvoiceState, InvoiceForm } from 'src/app/invoice.reducer';
import { UpdateInvoiceFormDataTitle, UpdateInvoiceFormDataDate, UpdateInvoiceFormDataAmount, CreateInvoice } from 'src/app/invoice.actions';

@Component({
	selector: 'app-invoice-dialog-information-desktop',
	templateUrl: './invoice-dialog-information-desktop.component.html',
	styleUrls: ['./invoice-dialog-information-desktop.component.css']
})
export class InvoiceDialogInformationDesktopComponent {

	private subscription: Subscription;
	invoiceFormData: InvoiceForm = null;
	
	constructor(private store: Store<{ appState: InvoiceState }>) {
		this.subscription = store.pipe(select('appState')).subscribe((data) => {
			this.invoiceFormData = data.invoiceForm;
		});
	}

	titleChange(event: any) {
		this.store.dispatch(UpdateInvoiceFormDataTitle({ title: event.target.value || '' }));
	}

	dateChange(event: any) {
		this.store.dispatch(UpdateInvoiceFormDataDate({ date: event.target.value || '' }));
	}

	amountChange(event: any) {
		this.store.dispatch(UpdateInvoiceFormDataAmount({ amount: event.target.value || null }));
	}

	createNewInvoice() {
		this.store.dispatch(CreateInvoice());
	}
}