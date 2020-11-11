import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginComponent} from './components/login/login.component';
import {CookieModule} from 'ngx-cookie';
import {FooterComponent} from './components/footer/footer.component';
import {DefaultComponent} from './components/dash-board/items/default/default.component';
import {ManageCustomerComponent} from './components/manage-customer/manage-customer.component';
import {AllItemsComponent} from './components/all-items/all-items.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {PlaceOrderComponent} from './components/place-order/place-order.component';
import {SignOutComponent} from './components/sign-out/sign-out.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    LoginComponent,
    FooterComponent,
    DefaultComponent,
    ManageCustomerComponent,
    AllItemsComponent,
    OrderDetailsComponent,
    PlaceOrderComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
