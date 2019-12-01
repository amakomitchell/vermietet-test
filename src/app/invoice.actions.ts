import { createAction, props } from '@ngrx/store';

export const ToggleInvoiceDialog = createAction('[Invoice Component] Toggle');

export const UpdateInvoiceFormDataTitle = createAction(
	'[Invoice Form] UpdateTitle',
	props<{ title: string }>()
);

export const UpdateInvoiceFormDataDate = createAction(
	'[Invoice Form] UpdateDate',
	props<{ date: string }>()
);

export const UpdateInvoiceFormDataAmount = createAction(
	'[Invoice Form] UpdateAmount',
	props<{ amount: number }>()
);

export const CreateInvoice = createAction(
	'[Invoice Form] Create'
);