import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Search } from '../models/search';

@Component({
  selector: 'app-search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.scss'],
})
export class SearchComponent {
  model = new Search('');
  submitted = false;

  constructor(private router: Router) { }

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/id=', this.model.searchParams]);
  }
}
