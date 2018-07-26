import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormComponentComponent } from './joke-form-component.component';

describe('JokeFormComponentComponent', () => {
  let component: JokeFormComponentComponent;
  let fixture: ComponentFixture<JokeFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
