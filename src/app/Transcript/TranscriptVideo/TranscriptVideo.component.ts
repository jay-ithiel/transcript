import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript-video',
  templateUrl: './TranscriptVideo.component.html',
  styleUrls: ['./TranscriptVideo.component.scss'],
})
export class TranscriptVideoComponent implements OnInit {
  @Input() transcriptId: string;
  public videoSrcUrl: string;

  ngOnInit() {
    this.videoSrcUrl = `https://static.chorus.ai/api/${this.transcriptId}.mp4`;
  }
}
