import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPromexmaNacionalComponent } from './graficas-promexma-nacional.component';

describe('GraficasPromexmaNacionalComponent', () => {
  let component: GraficasPromexmaNacionalComponent;
  let fixture: ComponentFixture<GraficasPromexmaNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasPromexmaNacionalComponent]
    });
    fixture = TestBed.createComponent(GraficasPromexmaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
