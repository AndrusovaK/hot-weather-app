import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Resort, RESORTS$} from '../data';
import { ResortsFilterPipe } from '../common/pipes/resorts-filter.pipe';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent implements OnInit, OnDestroy {

  @Input()
  public selectedResort: Resort;

/*  @Input()
  public resortList: Resort[];*/

  @Output()
  public resortChanged = new EventEmitter<Resort>();

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

    console.log(result);
    return result;
  }

  public selectResort(resort: Resort) {
    this.selectedResort = resort;
    this.resortChanged.emit(resort);
  }

  public changeType(type: string) {
    this.selectedType = type;
    const filteredResorts = this.resortsFilter.transform(this.resortList, this.selectedType);
    this.selectResort(filteredResorts[0]);
  }

  constructor(private resortsFilter: ResortsFilterPipe) { }

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