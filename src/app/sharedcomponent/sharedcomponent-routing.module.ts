import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentComponent } from './sharedcomponent.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'NAV', component: NavbarComponent },
  { path: 'NAV', component: FooterComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedcomponentRoutingModule { }
