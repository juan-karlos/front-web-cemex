import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlantaComponent } from './agregar-planta.component';

describe('AgregarPlantaComponent', () => {
  let component: AgregarPlantaComponent;
  let fixture: ComponentFixture<AgregarPlantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPlantaComponent]
    });
    fixture = TestBed.createComponent(AgregarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
