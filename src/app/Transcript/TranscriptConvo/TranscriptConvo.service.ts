import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranscriptConvoService {
  public transcriptsDataUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  getTranscriptData(transcriptId) {
    this.transcriptsDataUrl = `https://static.chorus.ai/api/${transcriptId}.json`;
    return this.http.get(this.transcriptsDataUrl);
  }
}
