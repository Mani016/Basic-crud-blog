import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogGetComponent } from './blog-get/blog-get.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { blogService } from './blog.service';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogAddComponent,
    BlogGetComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [blogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
