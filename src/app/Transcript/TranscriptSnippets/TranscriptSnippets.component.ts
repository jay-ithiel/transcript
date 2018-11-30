import { Component, Input, OnInit } from '@angular/core';

import { TranscriptSnippetsService } from './TranscriptSnippets.service';

@Component({
  selector: 'app-transcript-snippets',
  templateUrl: './TranscriptSnippets.component.html',
  styleUrls: ['./TranscriptSnippets.component.scss'],
  providers: [TranscriptSnippetsService],
})
export class TranscriptSnippetsComponent implements OnInit {
  @Input() transcriptId: string;

  public transcriptsData: string[];

  constructor(private transcriptSnippetsService: TranscriptSnippetsService) { }

  ngOnInit() {
    this.fetchTranscriptsData();
  }

  fetchTranscriptsData() {
    this.transcriptSnippetsService.getTranscriptData(this.transcriptId)
      .subscribe((transcripts: any) => {
        this.transcriptsData = transcripts;
      });
  }
}
