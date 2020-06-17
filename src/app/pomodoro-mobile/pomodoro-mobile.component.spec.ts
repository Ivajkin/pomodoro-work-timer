import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroMobileComponent } from './pomodoro-mobile.component';

describe('PomodoroMobileComponent', () => {
  let component: PomodoroMobileComponent;
  let fixture: ComponentFixture<PomodoroMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
