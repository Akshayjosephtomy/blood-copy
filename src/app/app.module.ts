import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddonorComponent,
    SearchdonorComponent,
    DeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
