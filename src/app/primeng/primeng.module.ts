import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
      CommonModule,

    ],
    exports:[
      TagModule,
      SidebarModule,
      ButtonModule,
      DropdownModule,
    ]

})
export class PrimengModule { }
