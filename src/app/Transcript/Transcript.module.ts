import { NgModule } from '@angular/core';

import { TranscriptComponent } from './Transcript.component';
import { TranscriptHeaderComponent } from './TranscriptHeader/TranscriptHeader.component';
import { TranscriptVideoComponent } from './TranscriptVideo/TranscriptVideo.component';

@NgModule({
  declarations: [
    TranscriptComponent,
    TranscriptHeaderComponent,
    TranscriptVideoComponent,
  ],
  exports: [TranscriptComponent],
})
export class TranscriptModule { }
