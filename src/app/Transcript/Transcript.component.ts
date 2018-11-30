import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transcript',
  templateUrl: './Transcript.component.html',
  styleUrls: ['./Transcript.component.scss'],
})
export class TranscriptComponent {
  transcriptId = '4d79041e-f25f-421d-9e5f-3462459b9934';

  constructor(private router: Router) {
    const transcriptId = extractQueryParams('id');
    if (!transcriptId) {
      this.router.navigate(['/search']);
    }
  }
}

function extractQueryParams(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}
