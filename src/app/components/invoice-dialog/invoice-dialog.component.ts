import { Component, OnInit, Input } from '@angular/core';
import {select, Store} from '@ngrx/store'; 
import { Subscription } from 'rxjs';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InvoiceState } from 'src/app/invoice.reducer';

@Component({
	selector: 'app-invoice-dialog',
	templateUrl: './invoice-dialog.component.html',
	styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {
	@Input() closeDialog: Function;

	private subscription: Subscription;
	showDialog: boolean = false;
	closeIcon = faTimes;
 
  constructor(private store: Store<{ appState: InvoiceState }>) {
		this.subscription = store.pipe(select('appState')).subscribe((data) => {
			this.showDialog = data.showDialog;
		});
	}

	/* component properties */
	activeDialogContent = 0;
	sideMenuItems: string[] = ['Invoice Information', 'Payments'];

	ngOnInit() {}

	switchDialogContent(index: number) {
		if (index !== this.activeDialogContent) {
			this.activeDialogContent = index;
		}
	}

}