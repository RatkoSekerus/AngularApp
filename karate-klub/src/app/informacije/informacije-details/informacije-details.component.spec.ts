import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacijeDetailsComponent } from './informacije-details.component';

describe('InformacijeDetailsComponent', () => {
  let component: InformacijeDetailsComponent;
  let fixture: ComponentFixture<InformacijeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacijeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacijeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
