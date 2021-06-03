import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetrackingBarComponent } from './timetracking-bar.component';

describe('TimetrackingBarComponent', () => {
  let component: TimetrackingBarComponent;
  let fixture: ComponentFixture<TimetrackingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetrackingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetrackingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
