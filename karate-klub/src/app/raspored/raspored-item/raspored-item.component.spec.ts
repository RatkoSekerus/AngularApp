import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedItemComponent } from './raspored-item.component';

describe('RasporedItemComponent', () => {
  let component: RasporedItemComponent;
  let fixture: ComponentFixture<RasporedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RasporedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RasporedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
