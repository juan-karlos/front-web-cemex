import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosNoresteComponent } from './registros-noreste.component';

describe('RegistrosNoresteComponent', () => {
  let component: RegistrosNoresteComponent;
  let fixture: ComponentFixture<RegistrosNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosNoresteComponent]
    });
    fixture = TestBed.createComponent(RegistrosNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
