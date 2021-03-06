import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRasporedComponent } from './create-raspored.component';

describe('CreateRasporedComponent', () => {
  let component: CreateRasporedComponent;
  let fixture: ComponentFixture<CreateRasporedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRasporedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRasporedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
