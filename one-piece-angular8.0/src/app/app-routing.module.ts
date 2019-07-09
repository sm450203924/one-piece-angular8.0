import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CastsComponent } from './pages/casts/casts.component';
import { CastDetailComponent } from './pages/cast-detail/cast-detail.component';
import { CastEditComponent } from './pages/cast-edit/cast-edit.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { PlotDetailComponent } from './pages/plot-detail/plot-detail.component';
import { PlotAddComponent } from './pages/plot-add/plot-add.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cast', component: CastsComponent },
  { path: 'cast/:id', component: CastDetailComponent },
  { path: 'cast/:id/edit', component: CastEditComponent },
  { path: 'plot', component: PlotsComponent },
  { path: 'plot/:id', component: PlotDetailComponent },
  { path: 'plot/add', component: PlotAddComponent },
  { path: 'video', component: VideosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }

