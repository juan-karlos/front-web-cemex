import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromexmaPacificoComponent } from './promexma-pacifico.component';

describe('PromexmaPacificoComponent', () => {
  let component: PromexmaPacificoComponent;
  let fixture: ComponentFixture<PromexmaPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromexmaPacificoComponent]
    });
    fixture = TestBed.createComponent(PromexmaPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
