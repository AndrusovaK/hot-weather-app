import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortWeatherComponent } from './resort-weather.component';

describe('ResortWeatherComponent', () => {
  let component: ResortWeatherComponent;
  let fixture: ComponentFixture<ResortWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
