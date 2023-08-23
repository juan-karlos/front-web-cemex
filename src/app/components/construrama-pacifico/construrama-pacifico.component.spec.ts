import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruramaPacificoComponent } from './construrama-pacifico.component';

describe('ConstruramaPacificoComponent', () => {
  let component: ConstruramaPacificoComponent;
  let fixture: ComponentFixture<ConstruramaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstruramaPacificoComponent]
    });
    fixture = TestBed.createComponent(ConstruramaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
