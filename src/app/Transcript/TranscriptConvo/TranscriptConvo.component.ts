/**
 * Started running into CORS errors when trying to fetch the data from
 * the api on Sunday afternoon, so copied the json into the 'data' dir
 *
 * To get the data directly from the api:
 * - comment/remove `this.fetchTranscriptsData();`
 * - uncomment/add `this.fetchTranscriptsDataFromApi();`
 */

import { Component, Input, OnInit } from '@angular/core';

import { TranscriptConvoService } from './TranscriptConvo.service';

import { TRANSCRIPTS } from '../../../data';

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
    // this.fetchTranscriptsDataFromApi();
  }

  fetchTranscriptsData() {
    const sortedTranscripts = TRANSCRIPTS.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
    this.transcriptsData = this.organizeSpeakers(sortedTranscripts);
  }

  fetchTranscriptsDataFromApi() {
    this.transcriptConvoService.getTranscriptData(this.transcriptId)
      .subscribe((transcripts: any) => {
        const sortedTranscripts = transcripts.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
        this.transcriptsData = this.organizeSpeakers(sortedTranscripts);
      });
  }

  organizeSpeakers(transcripts) {
    const organizedTranscripts = [];
    let transcriptBlock = [];
    transcripts.forEach((transcript, i) => {
      if (i > 0 && this.lastSpeaker !== transcript.speaker) {
        organizedTranscripts.push(transcriptBlock);
        transcriptBlock = [];
        this.transcriptConvoService.updateLastSpeaker(transcript.speaker);
      }
      transcriptBlock.push(transcript);
    });
    return organizedTranscripts;
  }
}
