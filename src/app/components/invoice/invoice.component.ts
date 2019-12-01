import { Component, OnInit } from "@angular/core";
import { select, Store } from '@ngrx/store'; 
import { Subscription } from 'rxjs';
import { InvoiceState, Invoice } from 'src/app/invoice.reducer';
import { ToggleInvoiceDialog } from 'src/app/invoice.actions';

@Component({
  selector: 'app-invoice',
	templateUrl: './invoice.component.html',
	styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
	
	private subscription: Subscription;
	invoices: Invoice[] = [];

	constructor(private store: Store<{ appState: InvoiceState }>) {
		this.subscription = store.pipe(select('appState')).subscribe((data) => {
			this.invoices = data.invoiceList;
		});
	}
	
	ngOnInit() {}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	toggleDialog() {
		this.store.dispatch(ToggleInvoiceDialog());
	}
}