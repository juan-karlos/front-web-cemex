import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoConstructoresComponent } from './segmento-constructores.component';

describe('SegmentoConstructoresComponent', () => {
  let component: SegmentoConstructoresComponent;
  let fixture: ComponentFixture<SegmentoConstructoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentoConstructoresComponent]
    });
    fixture = TestBed.createComponent(SegmentoConstructoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
