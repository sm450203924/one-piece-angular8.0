import { Injectable } from '@angular/core';
import { Cast } from '../models/cast';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})

export class CastService {
  private castsUrl = 'api/casts';  // URL to web api
  constructor(private http: HttpClient) { }
  getCasts(): Observable<Cast[]> {
    return this.http.get<Cast[]>(this.castsUrl)
      .pipe(
      catchError(this.handleError<Cast[]>('getCasts', []))
    );
  }
  getCastNo404<Data>(id: number): Observable<Cast> {
    const url = `${this.castsUrl}/?id=${id}`;
    return this.http.get<Cast[]>(url)
      .pipe(
        map(casts => casts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Cast>(`getCast id=${id}`))
      );
  }
  /** GET cast by id. Will 404 if id not found */
  getCast(id: number): Observable<Cast> {
    const url = `${this.castsUrl}/${id}`;
    return this.http.get<Cast>(url).pipe(
      catchError(this.handleError<Cast>(`getCast id=${id}`))
    );
  }
  updateCast(cast: Cast): Observable<any> {
    return this.http.put(this.castsUrl, cast, httpOptions).pipe(
      catchError(this.handleError<any>('updateCast'))
    );
  }
  addCast(cast: Cast): Observable<Cast> {
    return this.http.post<Cast>(this.castsUrl, cast, httpOptions).pipe(
      catchError(this.handleError<Cast>('addCast'))
    );
  }
  /** DELETE: delete the cast from the server */
  deleteCast(cast: Cast | number): Observable<Cast> {
    const id = typeof cast === 'number' ? cast : cast.id;
    const url = `${this.castsUrl}/${id}`;

    return this.http.delete<Cast>(url, httpOptions).pipe(
      catchError(this.handleError<Cast>('deleteCast'))
    );
  }
  /* GET casts whose name contains search term */
  searchCasts(term: string): Observable<Cast[]> {
    if (!term.trim()) {
      // if not search term, return empty cast array.
      return of([]);
    }
    return this.http.get<Cast[]>(`${this.castsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Cast[]>('searchCasts', []))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
