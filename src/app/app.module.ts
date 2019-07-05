import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { FooterComponent } from './footer/footer.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CompareComponent } from './compare/compare.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';
import { ResellerComponent } from './reseller/reseller.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoverageComponent,
    CompareComponent,
    PlanComponent,
    HomeComponent,
    ResellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
