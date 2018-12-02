import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transcript-speaker',
  templateUrl: './TranscriptSpeaker.component.html',
  styleUrls: ['./TranscriptSpeaker.component.scss'],
})
export class TranscriptSpeakerComponent {
  @Input() speaker: string;
}
