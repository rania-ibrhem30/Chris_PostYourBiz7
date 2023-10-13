import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  { path: 'listing', loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule) },
  { path: 'posting', loadChildren: () => import('./posting/posting.module').then(m => m.PostingModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'buysell', loadChildren: () => import('./buysell/buysell.module').then(m => m.BuysellModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
