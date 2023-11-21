import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanmobilinactivoComponent } from './planmobilinactivo.component';

describe('PlanmobilinactivoComponent', () => {
  let component: PlanmobilinactivoComponent;
  let fixture: ComponentFixture<PlanmobilinactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanmobilinactivoComponent]
    });
    fixture = TestBed.createComponent(PlanmobilinactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
