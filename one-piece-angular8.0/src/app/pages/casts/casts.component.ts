import {Component, OnInit} from '@angular/core';
import {Cast} from '../../models/cast';
import {CastService} from '../../services/cast.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  constructor(private castService: CastService) {
  }

  casts: Cast[];

  getCasts(): void {
    this.castService.getCasts()
      .subscribe(casts => this.casts = casts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.castService.addCast({ name } as Cast)
      .subscribe(cast => {
        this.casts.push(cast);
      });
  }
  delete(cast: Cast): void {
    this.casts = this.casts.filter(h => h !== cast);
    this.castService.deleteCast(cast).subscribe();
  }
  ngOnInit() {
    this.getCasts();
  }

}
