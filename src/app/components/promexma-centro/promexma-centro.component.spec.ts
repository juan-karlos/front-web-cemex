import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromexmaCentroComponent } from './promexma-centro.component';

describe('PromexmaCentroComponent', () => {
  let component: PromexmaCentroComponent;
  let fixture: ComponentFixture<PromexmaCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromexmaCentroComponent]
    });
    fixture = TestBed.createComponent(PromexmaCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
