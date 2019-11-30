import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-invoice-dialog',
	templateUrl: './invoice-dialog.component.html',
	styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {
	@Input() isVisible: boolean;
	@Input() closeDialog: Function;

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