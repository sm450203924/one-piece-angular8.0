import {Component, Input, OnInit} from '@angular/core';
import {Plot} from '../../models/plot';
import { PlotService } from '../../services/plot.service';

@Component({
  selector: 'app-plot-add',
  templateUrl: './plot-add.component.html',
  styleUrls: ['./plot-add.component.scss']
})
export class PlotAddComponent implements OnInit {
  plots: Plot[];
  constructor(private plotService: PlotService) { }

  ngOnInit() {
  }
  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title) { return; }
    if (!content) { return; }
    this.plotService.addPlot({ title, content } as Plot)
      .subscribe(plot => {
        this.plots.push(plot);
      });
  }
}
