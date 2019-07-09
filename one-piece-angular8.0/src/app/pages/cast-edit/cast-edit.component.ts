import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CastService } from '../../services/cast.service';

@Component({
  selector: 'app-cast-edit',
  templateUrl: './cast-edit.component.html',
  styleUrls: ['./cast-edit.component.scss']
})
export class CastEditComponent implements OnInit {
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
  save(): void {
    this.castService.updateCast(this.cast)
      .subscribe(() => this.goBack());
  }

}
