import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceInformationComponent } from './components/invoice-dialog/invoice-information/invoice-information.component';


const routes: Routes = [
  { path: 'dashboard', component: InvoiceComponent },
  { path: 'information', component: InvoiceInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
