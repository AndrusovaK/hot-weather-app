import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ResortListComponent } from './resort-list/resort-list.component';
import { ResortItemComponent } from './resort-item/resort-item.component';
import { ResortWeatherComponent } from './resort-weather/resort-weather.component';
import { ResortSocialComponent } from './resort-social/resort-social.component';
import { ResortsFilterPipe } from './common/pipes/resorts-filter.pipe';
import {ChangeResortService} from './change-resort.service';


@NgModule({
  declarations: [
    AppComponent,
    ResortListComponent,
    ResortItemComponent,
    ResortWeatherComponent,
    ResortSocialComponent,
    ResortsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ResortsFilterPipe,
    ChangeResortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
