import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoCadenaSuministroComponent } from './segmento-cadena-suministro.component';

describe('SegmentoCadenaSuministroComponent', () => {
  let component: SegmentoCadenaSuministroComponent;
  let fixture: ComponentFixture<SegmentoCadenaSuministroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentoCadenaSuministroComponent]
    });
    fixture = TestBed.createComponent(SegmentoCadenaSuministroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
