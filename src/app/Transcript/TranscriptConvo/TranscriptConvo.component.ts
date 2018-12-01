import { Component, Input, OnInit } from '@angular/core';

import { TranscriptConvoService } from './TranscriptConvo.service';

@Component({
  selector: 'app-transcript-snippets',
  templateUrl: './TranscriptConvo.component.html',
  styleUrls: ['./TranscriptConvo.component.scss'],
  providers: [TranscriptConvoService],
})
export class TranscriptConvoComponent implements OnInit {
  @Input() transcriptId: string;

  public transcriptsData: string[];

  constructor(private TranscriptConvoService: TranscriptConvoService) { }

  ngOnInit() {
    this.fetchTranscriptsData();
  }

  fetchTranscriptsData() {
    this.TranscriptConvoService.getTranscriptData(this.transcriptId)
      .subscribe((transcripts: any) => {
        this.transcriptsData = transcripts.sort(
          (a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)
        );
      });
  }
}
