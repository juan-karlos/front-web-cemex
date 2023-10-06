import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasInactivasComponent } from './plantas-inactivas.component';

describe('PlantasInactivasComponent', () => {
  let component: PlantasInactivasComponent;
  let fixture: ComponentFixture<PlantasInactivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantasInactivasComponent]
    });
    fixture = TestBed.createComponent(PlantasInactivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
