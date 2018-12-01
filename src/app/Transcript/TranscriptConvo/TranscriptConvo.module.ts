import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptConvoComponent } from './TranscriptConvo.component';
import { TranscriptSnippetComponent } from './TranscriptSnippet/TranscriptSnippet.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TranscriptConvoComponent,
    TranscriptSnippetComponent,
  ],
  exports: [TranscriptConvoComponent],
})
export class TranscriptConvoModule { }
