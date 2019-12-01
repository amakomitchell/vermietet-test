import { Component } from "@angular/core";
import {select, Store} from '@ngrx/store'; 
import { Subscription } from 'rxjs';
import { InvoiceState, InvoiceForm } from 'src/app/invoice.reducer';
import { UpdateInvoiceFormDataTitle, UpdateInvoiceFormDataDate, UpdateInvoiceFormDataAmount, CreateInvoice } from 'src/app/invoice.actions';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-invoice-dialog-information-mobile',
	templateUrl: './invoice-dialog-information-mobile.component.html',
	styleUrls: ['./invoice-dialog-information-mobile.component.css']
})
export class InvoiceDialogInformationMobileComponent {
	private subscription: Subscription;
	invoiceFormData: InvoiceForm = null;
	
	angleDownIcon = faAngleDown;
	
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
		this.store.dispatch(UpdateInvoiceFormDataAmount({ amount: event.target.value || 0 }));
	}

	createNewInvoice() {
		this.store.dispatch(CreateInvoice());
	}
}