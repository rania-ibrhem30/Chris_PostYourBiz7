import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuysellRoutingModule } from './buysell-routing.module';
import { BuysellComponent } from './buysell.component';


@NgModule({
  declarations: [
    BuysellComponent
  ],
  imports: [
    CommonModule,
    BuysellRoutingModule
  ]
})
export class BuysellModule { }
