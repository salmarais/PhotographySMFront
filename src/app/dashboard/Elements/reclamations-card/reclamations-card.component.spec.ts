import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsCardComponent } from './reclamations-card.component';

describe('ReclamationsCardComponent', () => {
  let component: ReclamationsCardComponent;
  let fixture: ComponentFixture<ReclamationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
