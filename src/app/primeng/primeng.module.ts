import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';

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
      CardModule,
      TabViewModule,
      GalleriaModule
    ]

})
export class PrimengModule { }
