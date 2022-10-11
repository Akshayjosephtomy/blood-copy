import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewalldonorComponent } from './viewalldonor/viewalldonor.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const link:Routes=[
  {
    path:"",component:AdddonorComponent
  },
  {
    path:"search",component:SearchdonorComponent
  },
  {
    path:"delete",component:DeleteComponent
  },
  {
    path:"view",component:ViewalldonorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdddonorComponent,
    SearchdonorComponent,
    DeleteComponent,
    NavbarComponent,
    ViewalldonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
