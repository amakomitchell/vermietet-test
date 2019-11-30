import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-invoice-list-item',
	templateUrl: './invoice-list-item.component.html',
	styleUrls: ['./invoice-list-item.component.css']
})

export class InvoiceListItemComponent implements OnInit {
	@Input() invoice: object;

	ngOnInit() {}
}