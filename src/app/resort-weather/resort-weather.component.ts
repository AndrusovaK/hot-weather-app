import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Resort, Weather} from '../data';
import {ChangeResortService} from '../change-resort.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-resort-weather',
  templateUrl: './resort-weather.component.html',
  styleUrls: ['./resort-weather.component.css']
})
export class ResortWeatherComponent implements OnInit, OnDestroy {

  private changeResortSubscription: Subscription;
  public weather: Weather;

  constructor(private changeResortService: ChangeResortService) {
    this.changeResortSubscription = this.changeResortService.resortChanged$.subscribe((newResort: Resort) => {
      this.weather = newResort.weather;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.changeResortSubscription.unsubscribe();
  }

}
