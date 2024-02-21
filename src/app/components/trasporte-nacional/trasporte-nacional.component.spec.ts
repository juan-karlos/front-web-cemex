import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasporteNacionalComponent } from './trasporte-nacional.component';

describe('TrasporteNacionalComponent', () => {
  let component: TrasporteNacionalComponent;
  let fixture: ComponentFixture<TrasporteNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrasporteNacionalComponent]
    });
    fixture = TestBed.createComponent(TrasporteNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
