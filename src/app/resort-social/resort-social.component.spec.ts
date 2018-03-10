import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortSocialComponent } from './resort-social.component';

describe('ResortSocialComponent', () => {
  let component: ResortSocialComponent;
  let fixture: ComponentFixture<ResortSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
