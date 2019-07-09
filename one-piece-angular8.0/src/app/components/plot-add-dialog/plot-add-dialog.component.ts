import {Component, Inject, OnInit} from '@angular/core';
import {Plot} from '../../models/plot';
// import {PlotService} from '../../services/plot.service';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  content: string;
}
@Component({
  selector: 'app-plot-add-dialog',
  templateUrl: './plot-add-dialog.component.html',
  styleUrls: ['./plot-add-dialog.component.scss'],
  providers: [MatDialogModule]
})
export class PlotAddDialogComponent implements OnInit {
  plots: Plot[];
  title: string;
  content: string;
  ngOnInit() {}
/*  constructor(
    public dialogRef: MatDialogRef<PlotAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plot,
    private plotService: PlotService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }*/
  constructor(
    public dialogRef: MatDialogRef<PlotAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  /*
  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title) {
      return;
    }
    if (!content) {
      return;
    }
    this.plotService.addPlot({title, content} as Plot)
      .subscribe(plot => {
        this.plots.push(plot);
      });
  }
*/
}
