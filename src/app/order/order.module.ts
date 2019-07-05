import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { LogoSectionComponent } from './logo-section/logo-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent, LogoSectionComponent]
})
export class OrderModule { }
