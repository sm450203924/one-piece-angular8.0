import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { CastsComponent } from './pages/casts/casts.component';
import { CastDetailComponent } from './pages/cast-detail/cast-detail.component';
import { CastSearchComponent } from './components/cast-search/cast-search.component';
import { CastEditComponent } from './pages/cast-edit/cast-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { PlotDetailComponent } from './pages/plot-detail/plot-detail.component';
import { PlotAddComponent } from './pages/plot-add/plot-add.component';
import { VideosComponent } from './pages/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CastsComponent,
    CastDetailComponent,
    CastSearchComponent,
    CastEditComponent,
    HomeComponent,
    PlotsComponent,
    PlotDetailComponent,
    PlotAddComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
