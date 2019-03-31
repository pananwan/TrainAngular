import { BrowserModule,/*เพิ่มใหม่*/TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { from } from 'rxjs';

import { HttpClientModule } from "@angular/common/http";
import { TransferHttpService } from "@gorniv/ngx-transfer-http";
import { CommonServiceService } from "./common-service.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TransferHttpService, TransferState, CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
