import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStationComponent } from './type-station.component';

describe('TypeStationComponent', () => {
  let component: TypeStationComponent;
  let fixture: ComponentFixture<TypeStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
