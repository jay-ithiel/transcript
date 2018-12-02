import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptConvoComponent } from './TranscriptConvo.component';
import { TranscriptBlockModule } from './TranscriptBlock/TranscriptBlock.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranscriptBlockModule,
  ],
  declarations: [TranscriptConvoComponent],
  exports: [TranscriptConvoComponent],
})
export class TranscriptConvoModule { }
