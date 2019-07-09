import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { WikiSearchList } from '../models/wiki-search-list';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable({
  providedIn: 'root'
})

export class WikiSearchListService {
  private url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=one%20piece&format=json';

  constructor(private http: HttpClient) { }
  // constructor() { }

  getWikiSearchLists(): Observable<WikiSearchList[]> {
    // const titles = [];
    // const details = [];
    // const links = [];
    return this.http.get<WikiSearchList[]>(this.url)
      .pipe(
/*        map(model => {
          const titles = model[1];
          const details = model[2];
          const links = model[3];
          model.titles = titles;
          model.details = details;
          model.links = links;
          return model;
        }),*/
      catchError(this.handleError<WikiSearchList[]>('getWikiSearchLists', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
