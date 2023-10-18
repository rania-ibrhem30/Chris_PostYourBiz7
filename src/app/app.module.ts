import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Shared/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Footer } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FooterComponent,
    HomeComponent,
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
    BrowserAnimationsModule
    
  ],
  providers: [],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
