import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParagraphComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
