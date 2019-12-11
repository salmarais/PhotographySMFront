import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerDashboardComponent } from './photographer-dashboard.component';

describe('PhotographerDashboardComponent', () => {
  let component: PhotographerDashboardComponent;
  let fixture: ComponentFixture<PhotographerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
