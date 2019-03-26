import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroUrgenceComponent } from './numero-urgence.component';

describe('NumeroUrgenceComponent', () => {
  let component: NumeroUrgenceComponent;
  let fixture: ComponentFixture<NumeroUrgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroUrgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroUrgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
