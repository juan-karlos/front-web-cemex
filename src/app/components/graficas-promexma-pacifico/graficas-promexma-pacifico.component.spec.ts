import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPromexmaPacificoComponent } from './graficas-promexma-pacifico.component';

describe('GraficasPromexmaPacificoComponent', () => {
  let component: GraficasPromexmaPacificoComponent;
  let fixture: ComponentFixture<GraficasPromexmaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasPromexmaPacificoComponent]
    });
    fixture = TestBed.createComponent(GraficasPromexmaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
