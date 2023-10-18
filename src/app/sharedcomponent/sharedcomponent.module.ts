import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedcomponentRoutingModule } from './sharedcomponent-routing.module';
import { SharedcomponentComponent } from './sharedcomponent.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SharedcomponentComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SharedcomponentRoutingModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class SharedcomponentModule { }
