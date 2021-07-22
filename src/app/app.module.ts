import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppLayoutComponent } from '@components/app-layout/app-layout.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ModalComponent } from '@components/modal/modal.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SidebarComponent,
    ModalComponent,
    IconButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
