import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruramaCentroComponent } from './construrama-centro.component';

describe('ConstruramaCentroComponent', () => {
  let component: ConstruramaCentroComponent;
  let fixture: ComponentFixture<ConstruramaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstruramaCentroComponent]
    });
    fixture = TestBed.createComponent(ConstruramaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
