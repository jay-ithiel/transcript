import { NgModule } from '@angular/core';

import { TranscriptComponent } from './Transcript.component';
import { TranscriptHeaderComponent } from './TranscriptHeader/TranscriptHeader.component';

@NgModule({
  declarations: [
    TranscriptComponent,
    TranscriptHeaderComponent,
  ],
  exports: [TranscriptComponent],
})
export class TranscriptModule { }
