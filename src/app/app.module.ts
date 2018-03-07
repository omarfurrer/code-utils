import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Base64EncoderComponent } from './base-64-encoder/base-64-encoder.component';
import { Base64DecoderComponent } from './base-64-decoder/base-64-decoder.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'encode/base64', component: Base64EncoderComponent },
  { path: 'decode/base64', component: Base64DecoderComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    Base64EncoderComponent,
    Base64DecoderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
