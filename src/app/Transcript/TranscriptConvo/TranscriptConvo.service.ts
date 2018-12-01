import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranscriptConvoService {
  public transcriptsDataUrl: string;
  public lastSpeaker: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient
  ) { }

  getTranscriptData(transcriptId) {
    this.transcriptsDataUrl = `https://static.chorus.ai/api/${transcriptId}.json`;
    return this.http.get(this.transcriptsDataUrl);
  }

  updateLastSpeaker(newSpeaker) {
    this.lastSpeaker.next(newSpeaker);
  }
}
