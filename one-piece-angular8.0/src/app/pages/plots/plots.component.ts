import {Component, Input, OnInit} from '@angular/core';
import {Plot} from '../../models/plot';
import {PlotService} from '../../services/plot.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.scss']
})
export class PlotsComponent implements OnInit {
  constructor(private plotService: PlotService) {}

  plots: Plot[];

  getPlots(): void {
    this.plotService.getPlots()
      .subscribe(plots => this.plots = plots);
  }

  delete(plot: Plot): void {
    this.plots = this.plots.filter(h => h !== plot);
    this.plotService.deletePlot(plot).subscribe();
  }



  ngOnInit() {
    this.getPlots();
  }

}
