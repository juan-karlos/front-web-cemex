import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasConstructoresNoresteComponent } from './graficas-constructores-noreste.component';

describe('GraficasConstructoresNoresteComponent', () => {
  let component: GraficasConstructoresNoresteComponent;
  let fixture: ComponentFixture<GraficasConstructoresNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasConstructoresNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasConstructoresNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
