import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BukuComponent } from './buku/buku.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './material/material';
import { FormsModule } from '@angular/forms';
import { TambahBukuComponent } from './tambah-buku/tambah-buku.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BukuComponent,
    TambahBukuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    TambahBukuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
