import { createReducer, on } from '@ngrx/store';
import { 
	ToggleInvoiceDialog, 
	UpdateInvoiceFormDataTitle, 
	UpdateInvoiceFormDataDate, 
	UpdateInvoiceFormDataAmount, 
	CreateInvoice,
} from './invoice.actions';

export interface Invoice {
	id?: number;
	date: string;
	title: string;
	amount: number;
	iban: string;
}

export interface InvoiceForm extends Invoice {
	retrieveFromAccount: boolean;
}

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
		amount: null,
		iban: 'IBAN:DE-01-1234...',
		retrieveFromAccount: false
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
	}),
	on(UpdateInvoiceFormDataTitle, (state, { title }) => {
		return {
			...state,
			invoiceForm: {
				...state.invoiceForm,
				title,
			}
		}
	}),
	on(UpdateInvoiceFormDataDate, (state, { date }) => {
		return {
			...state,
			invoiceForm: {
				...state.invoiceForm,
				date,
			}
		}
	}),
	on(UpdateInvoiceFormDataAmount, (state, { amount }) => {
		return {
			...state,
			invoiceForm: {
				...state.invoiceForm,
				amount,
			}
		}
	}),
	on(CreateInvoice, (state) => {
		const { invoiceList } = state;
		const lastInvoice = invoiceList[invoiceList.length - 1];
		return {
			...state,
			invoiceList: [
				...state.invoiceList,
				{
					...state.invoiceForm,
					id: lastInvoice.id + 1,
				}
			],
			invoiceForm: initialState.invoiceForm,
	   showDialog: false
		}
	}),
);

export function InvoiceReducer(state: InvoiceState, action: any) {
  return _InvoiceReducer(state, action);
}