import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoConstructoresComponent } from './riesgo-constructores.component';

describe('RiesgoConstructoresComponent', () => {
  let component: RiesgoConstructoresComponent;
  let fixture: ComponentFixture<RiesgoConstructoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiesgoConstructoresComponent]
    });
    fixture = TestBed.createComponent(RiesgoConstructoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
