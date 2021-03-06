import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedDetailsComponent } from './raspored-details.component';

describe('RasporedDetailsComponent', () => {
  let component: RasporedDetailsComponent;
  let fixture: ComponentFixture<RasporedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasporedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasporedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
