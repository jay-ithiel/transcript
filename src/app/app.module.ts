import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterModule } from './Footer/Footer.module';
import { SearchComponent } from './Search/Search.component';
import { SearchModule } from './Search/Search.module';
import { TranscriptComponent } from './Transcript/Transcript.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: TranscriptComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FooterModule,
    SearchModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    TranscriptComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
