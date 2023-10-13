import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuysellComponent } from './buysell.component';

const routes: Routes = [{ path: '', component: BuysellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuysellRoutingModule { }
