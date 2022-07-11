import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from 'src/services/images.service';
import { PropertiesService } from 'src/services/propeties.service';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PropertiesService, ImagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
