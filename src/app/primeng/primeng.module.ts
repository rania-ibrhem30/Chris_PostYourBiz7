import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { PasswordModule } from 'primeng/password';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';

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
      GalleriaModule,
      PasswordModule,
      InputTextareaModule,
      PaginatorModule
    ]

})
export class PrimengModule { }
