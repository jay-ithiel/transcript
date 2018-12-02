import { Component, Input, OnInit } from '@angular/core';

import { TranscriptConvoService } from './TranscriptConvo.service';

@Component({
  selector: 'app-transcript-convo',
  templateUrl: './TranscriptConvo.component.html',
  styleUrls: ['./TranscriptConvo.component.scss'],
  providers: [TranscriptConvoService],
})
export class TranscriptConvoComponent implements OnInit {
  @Input() transcriptId: string;

  public transcriptsData: string[];
  public lastSpeaker: string;

  constructor(
    private transcriptConvoService: TranscriptConvoService
  ) {
    this.transcriptConvoService.lastSpeaker.subscribe(lastSpeaker => {
      this.lastSpeaker = lastSpeaker;
    });
  }

  ngOnInit() {
    this.fetchTranscriptsData();
  }

  fetchTranscriptsData() {
    this.transcriptConvoService.getTranscriptData(this.transcriptId)
      .subscribe((transcripts: any) => {
        const sortedTranscripts = transcripts.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        this.transcriptsData = this.organizeSpeakers(sortedTranscripts);
      });
  }

  organizeSpeakers(transcripts) {
    return transcripts.map((transcript, i) => {
      if (i === 0 || this.lastSpeaker !== transcript.speaker) {
        transcript.showSpeaker = true;
        this.transcriptConvoService.updateLastSpeaker(transcript.speaker);
      }
      return transcript;
    });
  }
}
