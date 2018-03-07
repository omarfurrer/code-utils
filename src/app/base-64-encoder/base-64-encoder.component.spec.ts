import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncoderComponent } from './base-64-encoder.component';

describe('Base64EncoderComponent', () => {
  let component: Base64EncoderComponent;
  let fixture: ComponentFixture<Base64EncoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64EncoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64EncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
