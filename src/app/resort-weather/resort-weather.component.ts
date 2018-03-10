import {Component, Input, OnInit} from '@angular/core';
import {Resort, Weather} from '../data';

@Component({
  selector: 'app-resort-weather',
  templateUrl: './resort-weather.component.html',
  styleUrls: ['./resort-weather.component.css']
})
export class ResortWeatherComponent implements OnInit {

  @Input()
  public weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
