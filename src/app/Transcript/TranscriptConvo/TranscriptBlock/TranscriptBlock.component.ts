import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript-block',
  templateUrl: './TranscriptBlock.component.html',
  styleUrls: ['./TranscriptBlock.component.scss'],
})
export class TranscriptBlockComponent implements OnInit {
  @Input() transcriptBlock: any;
  public speaker: string;

  ngOnInit() {
    const firstTranscript = this.transcriptBlock[0];
    this.speaker = firstTranscript.speaker;
  }
}
