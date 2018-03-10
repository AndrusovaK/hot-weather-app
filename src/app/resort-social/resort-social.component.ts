import {Component, Input, OnInit} from '@angular/core';
import {SocialInfo} from '../data';

@Component({
  selector: 'app-resort-social',
  templateUrl: './resort-social.component.html',
  styleUrls: ['./resort-social.component.css']
})
export class ResortSocialComponent implements OnInit {

  @Input()
  public socialInfo: SocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
