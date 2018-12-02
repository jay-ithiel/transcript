import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranscriptBlockComponent } from './TranscriptBlock.component';
import { TranscriptSpeakerComponent } from '../TranscriptSpeaker/TranscriptSpeaker.component';
import { TranscriptSpeakerBubbleComponent } from '../TranscriptSpeakerBubble/TranscriptSpeakerBubble.component';
import { TranscriptSnippetComponent } from '../TranscriptSnippet/TranscriptSnippet.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TranscriptBlockComponent,
    TranscriptSpeakerComponent,
    TranscriptSpeakerBubbleComponent,
    TranscriptSnippetComponent,
  ],
  exports: [TranscriptBlockComponent],
})
export class TranscriptBlockModule { }
