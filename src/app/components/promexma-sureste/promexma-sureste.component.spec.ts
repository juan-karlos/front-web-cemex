import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromexmaSuresteComponent } from './promexma-sureste.component';

describe('PromexmaSuresteComponent', () => {
  let component: PromexmaSuresteComponent;
  let fixture: ComponentFixture<PromexmaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromexmaSuresteComponent]
    });
    fixture = TestBed.createComponent(PromexmaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
