import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringLengthCounterComponent } from './string-length-counter.component';

describe('StringLengthCounterComponent', () => {
  let component: StringLengthCounterComponent;
  let fixture: ComponentFixture<StringLengthCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringLengthCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringLengthCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
