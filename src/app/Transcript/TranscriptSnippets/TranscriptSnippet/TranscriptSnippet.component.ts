import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transcript-snippet',
  templateUrl: './TranscriptSnippet.component.html',
  styleUrls: ['./TranscriptSnippet.component.scss'],
})
export class TranscriptSnippetComponent {
  @Input() transcript: any;
}
