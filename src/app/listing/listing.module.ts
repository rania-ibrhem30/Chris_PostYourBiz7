import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeatilsListingComponent } from './deatils-listing/deatils-listing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ListingComponent,
    DeatilsListingComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class ListingModule { }
