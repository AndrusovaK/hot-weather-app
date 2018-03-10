import {Component, Input, OnInit} from '@angular/core';
import {Resort} from '../data';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.css']
})
export class ResortItemComponent {

  @Input()
  public resort: Resort;

}
