import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilDashboardComponent } from './util-dashboard/util-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilDashboardComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
