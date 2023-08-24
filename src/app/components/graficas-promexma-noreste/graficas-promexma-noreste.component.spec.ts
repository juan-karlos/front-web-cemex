import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPromexmaNoresteComponent } from './graficas-promexma-noreste.component';

describe('GraficasPromexmaNoresteComponent', () => {
  let component: GraficasPromexmaNoresteComponent;
  let fixture: ComponentFixture<GraficasPromexmaNoresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasPromexmaNoresteComponent]
    });
    fixture = TestBed.createComponent(GraficasPromexmaNoresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
