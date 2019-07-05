import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccountComponent} from './order/account/account.component';
import {CompareComponent} from './compare/compare.component';
import {HomeComponent} from './home/home.component';
import {CoverageComponent} from './coverage/coverage.component';
import {PlanComponent} from './plan/plan.component';
import {ResellerComponent} from './reseller/reseller.component';


const routes: Routes = [
    // {path: '', redirectTo: 'order', pathMatch: 'full'},
   // {path: '', redirectTo: 'order', pathMatch: 'full'},
   {path: '', component: HomeComponent},
  //  {path: 'order', component: AccountComponent},
   {path: 'compare', component: CompareComponent},
   {path: 'coverage', component: CoverageComponent},
   {path: 'plan', component: PlanComponent},
   {path: 'reseller', component: ResellerComponent},
   {path: '**', component: HomeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
