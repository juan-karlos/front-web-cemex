import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromexmaNacionalComponent } from './promexma-nacional.component';

describe('PromexmaNacionalComponent', () => {
  let component: PromexmaNacionalComponent;
  let fixture: ComponentFixture<PromexmaNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromexmaNacionalComponent]
    });
    fixture = TestBed.createComponent(PromexmaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
