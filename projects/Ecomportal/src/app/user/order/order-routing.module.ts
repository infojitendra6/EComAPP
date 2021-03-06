import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }