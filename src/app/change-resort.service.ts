import { Injectable } from '@angular/core';
import {Resort} from './data';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ChangeResortService {

  constructor() { }

  private newResortSource = new Subject<Resort>();

  public resortChanged$: Observable<Resort> = this.newResortSource.asObservable();

  changeResort(newResort: Resort) {
    this.newResortSource.next(newResort);
  }

}
