import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRegistroComponent } from './agregar-registro.component';

describe('AgregarRegistroComponent', () => {
  let component: AgregarRegistroComponent;
  let fixture: ComponentFixture<AgregarRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarRegistroComponent]
    });
    fixture = TestBed.createComponent(AgregarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
