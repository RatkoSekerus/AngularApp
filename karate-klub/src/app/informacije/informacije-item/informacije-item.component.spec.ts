import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacijeItemComponent } from './informacije-item.component';

describe('InformacijeItemComponent', () => {
  let component: InformacijeItemComponent;
  let fixture: ComponentFixture<InformacijeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacijeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacijeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
