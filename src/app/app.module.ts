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
import { UtilitiesService } from './utilities.service';
import { UrlEncoderComponent } from './url-encoder/url-encoder.component';
import { UrlDecoderComponent } from './url-decoder/url-decoder.component';
import { StringLengthCounterComponent } from './string-length-counter/string-length-counter.component';
import { RandomStringGeneratorComponent } from './random-string-generator/random-string-generator.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'encode/base64', component: Base64EncoderComponent },
  { path: 'decode/base64', component: Base64DecoderComponent },
  { path: 'encode/url', component: UrlEncoderComponent },
  { path: 'decode/url', component: UrlDecoderComponent },
  { path: 'count/string', component: StringLengthCounterComponent },
  { path: 'random/string', component: RandomStringGeneratorComponent },
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
    Base64DecoderComponent,
    UrlEncoderComponent,
    UrlDecoderComponent,
    StringLengthCounterComponent,
    RandomStringGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  providers: [UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
