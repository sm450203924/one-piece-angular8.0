import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Cast} from '../models/cast';
import {Plot} from '../models/plot';
import {WikiSearchList} from '../models/wiki-search-list';
import {Injectable} from '@angular/core';
import castsData from '../../assets/json/cast.json';
import plotsData from '../../assets/json/plot.json';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const casts = castsData;
    const plots = plotsData;

    return {casts, plots};
  }

  genId(casts: Cast[]): number {
    return casts.length > 0 ? Math.max(...casts.map(cast => cast.id)) + 1 : 1;
  }

}
