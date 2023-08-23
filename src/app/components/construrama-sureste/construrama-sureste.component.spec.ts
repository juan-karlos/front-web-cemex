import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruramaSuresteComponent } from './construrama-sureste.component';

describe('ConstruramaSuresteComponent', () => {
  let component: ConstruramaSuresteComponent;
  let fixture: ComponentFixture<ConstruramaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstruramaSuresteComponent]
    });
    fixture = TestBed.createComponent(ConstruramaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
