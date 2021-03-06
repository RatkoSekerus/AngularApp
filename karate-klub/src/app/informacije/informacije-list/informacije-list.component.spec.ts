import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacijeListComponent } from './informacije-list.component';

describe('InformacijeListComponent', () => {
  let component: InformacijeListComponent;
  let fixture: ComponentFixture<InformacijeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacijeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacijeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
