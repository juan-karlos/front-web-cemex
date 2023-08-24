import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPromexmaCentroComponent } from './graficas-promexma-centro.component';

describe('GraficasPromexmaCentroComponent', () => {
  let component: GraficasPromexmaCentroComponent;
  let fixture: ComponentFixture<GraficasPromexmaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasPromexmaCentroComponent]
    });
    fixture = TestBed.createComponent(GraficasPromexmaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
