import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptSnippetsComponent } from './TranscriptSnippets.component';

@NgModule({
  imports: [HttpClientModule],
  declarations: [TranscriptSnippetsComponent],
  exports: [TranscriptSnippetsComponent],
})
export class TranscriptSnippetsModule { }
