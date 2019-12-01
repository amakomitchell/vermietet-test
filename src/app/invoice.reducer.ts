import { createReducer, on } from '@ngrx/store';
import { ToggleInvoiceDialog } from './invoice.actions';

export interface Invoice {
	id?: number;
	date: string;
	title: string;
	amount: number;
	iban: string;
}

export interface InvoiceForm extends Invoice {}

export interface InvoiceState {
	invoiceList: Invoice[];
	invoiceForm: InvoiceForm;
	showDialog: boolean;
}

export const initialState: InvoiceState = {
	invoiceList: [
		{
			id: 1,
			date: '2018-01-01',
			title: 'Rent January',
			amount: 500,
			iban: 'IBAN:DE-01-1234...',
			// status: 1,
		}
	],
	invoiceForm: {
		date: '',
		title: '',
		amount: 0,
		iban: ''
	},
	showDialog: false
};

const _InvoiceReducer = createReducer(
	initialState,
	on(ToggleInvoiceDialog, (state) => {
		return {
			...state,
			showDialog: !state.showDialog
		}
	})
);

export function InvoiceReducer(state: InvoiceState, action: any) {
  return _InvoiceReducer(state, action);
}