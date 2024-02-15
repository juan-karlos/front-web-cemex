import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosPacificoComponent } from './registros-pacifico.component';

describe('RegistrosPacificoComponent', () => {
  let component: RegistrosPacificoComponent;
  let fixture: ComponentFixture<RegistrosPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrosPacificoComponent]
    });
    fixture = TestBed.createComponent(RegistrosPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
