import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sharedcomponent/home/home.component';
import { TermsConditionsComponent } from './sharedcomponent/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'Terms-Conditions',component:TermsConditionsComponent},
  { path: 'listing', loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule) },
  { path: 'posting', loadChildren: () => import('./posting/posting.module').then(m => m.PostingModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'buysell', loadChildren: () => import('./buysell/buysell.module').then(m => m.BuysellModule) },
  { path: 'sharedcomponent', loadChildren: () => import('./sharedcomponent/sharedcomponent.module').then(m => m.SharedcomponentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
