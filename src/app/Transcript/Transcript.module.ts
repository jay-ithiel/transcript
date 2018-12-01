import { NgModule } from '@angular/core';

import { TranscriptComponent } from './Transcript.component';
import { TranscriptHeaderComponent } from './TranscriptHeader/TranscriptHeader.component';
import { TranscriptVideoComponent } from './TranscriptVideo/TranscriptVideo.component';
import { TranscriptConvoModule } from './TranscriptConvo/TranscriptConvo.module';

@NgModule({
  imports: [TranscriptConvoModule],
  declarations: [
    TranscriptComponent,
    TranscriptHeaderComponent,
    TranscriptVideoComponent,
  ],
  exports: [TranscriptComponent],
})
export class TranscriptModule { }
