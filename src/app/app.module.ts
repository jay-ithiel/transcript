import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterModule } from './Footer/Footer.module';
import { SearchModule } from './Search/Search.module';
import { TranscriptModule } from './Transcript/Transcript.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './Search/Search.component';
import { TranscriptComponent } from './Transcript/Transcript.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: TranscriptComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FooterModule,
    SearchModule,
    TranscriptModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
