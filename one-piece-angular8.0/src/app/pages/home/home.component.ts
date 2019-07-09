import {Component, OnInit} from '@angular/core';
import {WikiSearchList} from '../../models/wiki-search-list';
import {WikiSearchListService} from '../../services/wiki-search-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wikiSearchListService: WikiSearchListService) {
  }

  wikiSearchLists: WikiSearchList[];

  ngOnInit() {
    // this.getWikiSearchLists();
  }
/*
  getWikiSearchLists(): void {
    this.wikiSearchListService.getWikiSearchLists()
      .subscribe(
        wikiSearchLists => this.wikiSearchLists = wikiSearchLists,
    );
  }
  */
}
