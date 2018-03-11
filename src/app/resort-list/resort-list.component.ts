import {Component, OnDestroy, OnInit} from '@angular/core';
import {Resort, RESORTS$} from '../data';
import { ResortsFilterPipe } from '../common/pipes/resorts-filter.pipe';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {ChangeResortService} from '../change-resort.service';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit, OnDestroy {

  public selectedResort: Resort;
  public resortTypes: string[];
  public selectedType = 'All';

  public resorts$: Observable<Resort[]> = RESORTS$;
  public resortsSubscription: Subscription;
  public resortList: Resort[];

  private getResortTypes(result: string[], resort: Resort): string[] {
    for (const type of resort.types) {
      if (!result.includes(type)) {
        result.push(type);
      }
    }
    return result;
  }

  public selectResort(resort: Resort) {
    this.selectedResort = resort;
    this.changeResortService.changeResort(this.selectedResort);
  }

  public changeType(type: string) {
    this.selectedType = type;
    const filteredResorts = this.resortsFilter.transform(this.resortList, this.selectedType);
    this.selectResort(filteredResorts[0]);
  }

  constructor(private resortsFilter: ResortsFilterPipe,
              private changeResortService: ChangeResortService) { }

  ngOnInit() {
    this.resortsSubscription = this.resorts$.subscribe((resorts: Resort[]) => {
      this.resortList = resorts;
      this.resortTypes = this.resortList.reduce(this.getResortTypes, ['All']);
      this.selectedType = this.resortTypes[0];

      if (this.resortList.length) {
        const filteredResorts = this.resortsFilter.transform(this.resortList, this.selectedType);
        this.selectResort(filteredResorts[0]);
      }
    });
  }

  ngOnDestroy() {
    this.resortsSubscription.unsubscribe();
  }
}
