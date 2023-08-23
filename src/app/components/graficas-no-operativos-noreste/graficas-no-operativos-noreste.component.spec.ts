import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasNoOperativosNoresteComponent } from './graficas-no-operativos-noreste.component';

describe('GraficasNoOperativosNoresteComponent', () => {
  let component: GraficasNoOperativosNoresteComponent;
  let fixture: ComponentFixture<GraficasNoOperativosNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasNoOperativosNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasNoOperativosNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
