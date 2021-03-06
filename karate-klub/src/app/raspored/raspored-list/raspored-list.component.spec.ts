import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedListComponent } from './raspored-list.component';

describe('RasporedListComponent', () => {
  let component: RasporedListComponent;
  let fixture: ComponentFixture<RasporedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasporedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasporedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
