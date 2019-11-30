import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-invoice',
	templateUrl: './invoice.component.html',
	styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
	rows: any[] = [
		{
			id: 1,
			date: '2018-01-01',
			title: 'Rent January',
			amount: '500 EUR',
			iban: 'IBAN:DE-01-1234...',
			// status: 1,
		}, {
			id: 11,
			date: '2018-02-03',
			title: 'Rent February',
			amount: '500 EUR',
			iban: 'IBAN:DE-01-1234...',
			// status: 0,
		}, {
			id: 21,
			date: '2018-03-02',
			title: 'Rent March',
			amount: '500 EUR',
			iban: 'IBAN:DE-01-1234...',
			// status: 1,
		}
	];
	ngOnInit() {}

	showDialog = false; // () => {}

	toggleDialog = () => {
		console.log('Toggling Dialog...', this);
		this.showDialog = !this.showDialog;
	}
}