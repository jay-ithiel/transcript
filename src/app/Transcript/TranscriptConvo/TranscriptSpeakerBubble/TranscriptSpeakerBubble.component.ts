import { Component, Input, OnInit } from '@angular/core';

const SPEAKER_TYPE = {
  cust: 'Cust',
  rep: 'Rep',
};

@Component({
  selector: 'app-transcript-speaker-bubble',
  templateUrl: './TranscriptSpeakerBubble.component.html',
  styleUrls: ['./TranscriptSpeakerBubble.component.scss'],
})
export class TranscriptSpeakerBubbleComponent implements OnInit {
  @Input() speaker: string;
  public isRep: boolean;

  ngOnInit() {
    this.isRep = this.speaker === SPEAKER_TYPE.cust;
  }
}
