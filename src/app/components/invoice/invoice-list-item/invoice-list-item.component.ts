import { Component, OnInit, Input } from "@angular/core";
import { Store } from '@ngrx/store';
import { InvoiceState } from 'src/app/invoice.reducer';

@Component({
  selector: 'app-invoice-list-item',
	templateUrl: './invoice-list-item.component.html',
	styleUrls: ['./invoice-list-item.component.css']
})

export class InvoiceListItemComponent implements OnInit {
	@Input() invoice: object;

	constructor(private store: Store<{ appState: InvoiceState }>) {

	}
	ngOnInit() {}

}