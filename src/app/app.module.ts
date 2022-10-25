import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ImageGalleryModule} from "./image-gallery/image-gallery.module";
import {AppRoutingModule} from "./app-routing.module";
import {GalleryConfig} from "./image-gallery/token";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule
  ],
  providers: [{provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule { }
