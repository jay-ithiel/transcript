import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptConvoComponent } from './TranscriptConvo.component';
import { TranscriptSpeakerComponent } from './TranscriptSpeaker/TranscriptSpeaker.component';
import { TranscriptSpeakerBubbleComponent } from './TranscriptSpeakerBubble/TranscriptSpeakerBubble.component';
import { TranscriptSnippetComponent } from './TranscriptSnippet/TranscriptSnippet.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    TranscriptConvoComponent,
    TranscriptSpeakerComponent,
    TranscriptSpeakerBubbleComponent,
    TranscriptSnippetComponent,
  ],
  exports: [TranscriptConvoComponent],
})
export class TranscriptConvoModule { }
