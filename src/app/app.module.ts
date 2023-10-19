import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng/primeng.module';
import { SharedcomponentModule } from './sharedcomponent/sharedcomponent.module';

@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TagModule,
    SidebarModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    SharedcomponentModule,
     
    
    
  ],
  providers: [],
  exports:[
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
