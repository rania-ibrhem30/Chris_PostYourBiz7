import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing.component';
import { DeatilsListingComponent } from './deatils-listing/deatils-listing.component';

const routes: Routes = [
  { path: '', component: ListingComponent },
  {path:'details/:id', component:DeatilsListingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
