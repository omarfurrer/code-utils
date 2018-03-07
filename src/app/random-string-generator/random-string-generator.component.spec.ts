import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStringGeneratorComponent } from './random-string-generator.component';

describe('RandomStringGeneratorComponent', () => {
  let component: RandomStringGeneratorComponent;
  let fixture: ComponentFixture<RandomStringGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomStringGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStringGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
