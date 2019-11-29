import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-invoice-list-items',
	templateUrl: './invoice-list-items.component.html',
	styleUrls: ['./invoice-list-items.component.css']
})

export class InvoiceListItemsComponent implements OnInit {
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
}