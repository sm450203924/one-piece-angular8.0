import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CastService } from '../../services/cast.service';

@Component({
  selector: 'app-cast-detail',
  templateUrl: './cast-detail.component.html',
  styleUrls: ['./cast-detail.component.scss']
})
export class CastDetailComponent implements OnInit {
  @Input() cast: Cast;
  constructor(
    private route: ActivatedRoute,
    private castService: CastService,
    private location: Location
  ) { }
  getCast(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.castService.getCast(id)
      .subscribe(cast => this.cast = cast);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getCast();
  }

}
