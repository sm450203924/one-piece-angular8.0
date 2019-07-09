import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Plot } from '../../models/plot';
import { PlotService } from '../../services/plot.service';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: [ './plot-detail.component.scss' ]
})
export class PlotDetailComponent implements OnInit {
  @Input() plot: Plot;

  constructor(
    private route: ActivatedRoute,
    private plotService: PlotService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlot();
  }

  getPlot(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plotService.getPlot(id)
      .subscribe(plot => this.plot = plot);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.plotService.updatePlot(this.plot)
      .subscribe(() => this.goBack());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
