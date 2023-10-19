import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { PrimengModule } from '../primeng/primeng.module';
import { DeatilsPostingComponent } from './deatils-posting/deatils-posting.component';


@NgModule({
  declarations: [
    PostingComponent,
    DeatilsPostingComponent
  ],
  imports: [
    CommonModule,
    PostingRoutingModule,
    PrimengModule
  ]
})
export class PostingModule { }
