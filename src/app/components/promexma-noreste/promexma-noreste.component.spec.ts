import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromexmaNoresteComponent } from './promexma-noreste.component';

describe('PromexmaNoresteComponent', () => {
  let component: PromexmaNoresteComponent;
  let fixture: ComponentFixture<PromexmaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromexmaNoresteComponent]
    });
    fixture = TestBed.createComponent(PromexmaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
