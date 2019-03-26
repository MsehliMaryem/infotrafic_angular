import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurTaxiComponent } from './chauffeur-taxi.component';

describe('ChauffeurTaxiComponent', () => {
  let component: ChauffeurTaxiComponent;
  let fixture: ComponentFixture<ChauffeurTaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurTaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
