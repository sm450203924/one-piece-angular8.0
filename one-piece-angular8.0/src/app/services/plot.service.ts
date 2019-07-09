import { Injectable } from '@angular/core';
import { Plot } from '../models/plot';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import {PlotAddDialogComponent} from '../components/plot-add-dialog/plot-add-dialog.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})

export class PlotService {
  private plotsUrl = 'api/plots';  // URL to web api
  plot: Plot;
  title: string;
  content: string;
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  getPlots(): Observable<Plot[]> {
    return this.http.get<Plot[]>(this.plotsUrl)
      .pipe(
        catchError(this.handleError<Plot[]>('getPlots', []))
      );
  }
  getPlotNo404<Data>(id: number): Observable<Plot> {
    const url = `${this.plotsUrl}/?id=${id}`;
    return this.http.get<Plot[]>(url)
      .pipe(
        map(plots => plots[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Plot>(`getPlot id=${id}`))
      );
  }
  /** GET plot by id. Will 404 if id not found */
  getPlot(id: number): Observable<Plot> {
    const url = `${this.plotsUrl}/${id}`;
    return this.http.get<Plot>(url).pipe(
      catchError(this.handleError<Plot>(`getPlot id=${id}`))
    );
  }
  updatePlot(plot: Plot): Observable<any> {
    return this.http.put(this.plotsUrl, plot, httpOptions).pipe(
      catchError(this.handleError<any>('updatePlot'))
    );
  }
  addPlot(plot: Plot): Observable<Plot> {
    return this.http.post<Plot>(this.plotsUrl, plot, httpOptions).pipe(
      catchError(this.handleError<Plot>('addPlot'))
    );
  }
  /** DELETE: delete the plot from the server */
  deletePlot(plot: Plot | number): Observable<Plot> {
    const id = typeof plot === 'number' ? plot : plot.id;
    const url = `${this.plotsUrl}/${id}`;

    return this.http.delete<Plot>(url, httpOptions).pipe(
      catchError(this.handleError<Plot>('deletePlot'))
    );
  }

  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(PlotAddDialogComponent, {
      width: '250px',
      data: {
        title: this.title, content: this.content,
        typeD: 'error' }
    });

    return dialogRef.afterClosed();
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
