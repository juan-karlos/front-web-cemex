import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRegistroComponent } from './actualizar-registro.component';

describe('ActualizarRegistroComponent', () => {
  let component: ActualizarRegistroComponent;
  let fixture: ComponentFixture<ActualizarRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarRegistroComponent]
    });
    fixture = TestBed.createComponent(ActualizarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
