import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Cast } from '../../models/cast';
import { CastService } from '../../services/cast.service';

@Component({
  selector: 'app-cast-search',
  templateUrl: './cast-search.component.html',
  styleUrls: [ './cast-search.component.scss' ]
})
export class CastSearchComponent implements OnInit {
  casts$: Observable<Cast[]>;
  private searchTerms = new Subject<string>();

  constructor(private castService: CastService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.casts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.castService.searchCasts(term)),
    );
  }
}
