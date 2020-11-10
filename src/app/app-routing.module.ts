import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';
import {DefaultComponent} from './components/dash-board/items/default/default.component';
import {ManageCustomerComponent} from './components/manage-customer/manage-customer.component';
import {AllItemsComponent} from './components/all-items/all-items.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {PlaceOrderComponent} from './components/place-order/place-order.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'dashboard/:user', component: DashBoardComponent, canActivate: [AuthGuard], pathMatch: 'full', children: [
      {path: '', component: DefaultComponent},
      {path: 'customer', component: ManageCustomerComponent},
      {path: 'item', component: AllItemsComponent},
      {path: 'orderDetail', component: OrderDetailsComponent},
      {path: 'placeOrder', component: PlaceOrderComponent},
    ]
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
