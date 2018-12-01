import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptSnippetsComponent } from './TranscriptSnippets.component';
import { TranscriptSnippetComponent } from './TranscriptSnippet/TranscriptSnippet.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TranscriptSnippetsComponent,
    TranscriptSnippetComponent,
  ],
  exports: [TranscriptSnippetsComponent],
})
export class TranscriptSnippetsModule { }
