import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruramaNoresteComponent } from './construrama-noreste.component';

describe('ConstruramaNoresteComponent', () => {
  let component: ConstruramaNoresteComponent;
  let fixture: ComponentFixture<ConstruramaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstruramaNoresteComponent]
    });
    fixture = TestBed.createComponent(ConstruramaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
