import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmobilactivoComponent } from './planmobilactivo.component';

describe('PlanmobilactivoComponent', () => {
  let component: PlanmobilactivoComponent;
  let fixture: ComponentFixture<PlanmobilactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanmobilactivoComponent]
    });
    fixture = TestBed.createComponent(PlanmobilactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
