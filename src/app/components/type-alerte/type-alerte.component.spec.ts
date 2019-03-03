import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAlerteComponent } from './type-alerte.component';

describe('TypeAlerteComponent', () => {
  let component: TypeAlerteComponent;
  let fixture: ComponentFixture<TypeAlerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
