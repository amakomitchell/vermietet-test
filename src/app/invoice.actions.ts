// import {Action} from '@ngrx/store';

// export enum InvoiceActionTypes {
//   // Add = '[InvoiceDialog Component] Add',
// 	// Remove = '[Invoice Component] Remove',
// 	ToggleDialog = '[Invoice Component] Toggle'
// }
// export class ActionEx implements Action {
//   readonly type;
//   payload?: any;
// }

// export class InvoiceAdd implements ActionEx {
//   readonly type = InvoiceActionTypes.Add;
//   constructor(public payload: any) {}
// }

// export class InvoiceRemove implements ActionEx {
//   readonly type = InvoiceActionTypes.Remove;
//   	constructor(public payload: any) {}
// }

// export class ToggleInvoiceDialog implements ActionEx {
// 	readonly type = InvoiceActionTypes.ToggleDialog;
//   	constructor() {}
// }

import { createAction } from '@ngrx/store';

export const ToggleInvoiceDialog = createAction('[Invoice Component] Toggle');
