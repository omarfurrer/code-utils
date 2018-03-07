import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDecoderComponent } from './url-decoder.component';

describe('UrlDecoderComponent', () => {
  let component: UrlDecoderComponent;
  let fixture: ComponentFixture<UrlDecoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDecoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
