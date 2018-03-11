import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Resort, SocialInfo} from '../data';
import {ChangeResortService} from '../change-resort.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-resort-social',
  templateUrl: './resort-social.component.html',
  styleUrls: ['./resort-social.component.css']
})
export class ResortSocialComponent implements OnInit, OnDestroy {

  private changeResortSubscription: Subscription;
  public socialInfo: SocialInfo;

  constructor(private changeResortService: ChangeResortService) {
    this.changeResortSubscription = this.changeResortService.resortChanged$.subscribe((newResort: Resort) => {
      this.socialInfo = newResort.socialInfo;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.changeResortSubscription.unsubscribe();
  }

}
