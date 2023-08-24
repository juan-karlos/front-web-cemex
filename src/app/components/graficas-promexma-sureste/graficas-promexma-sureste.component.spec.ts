import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPromexmaSuresteComponent } from './graficas-promexma-sureste.component';

describe('GraficasPromexmaSuresteComponent', () => {
  let component: GraficasPromexmaSuresteComponent;
  let fixture: ComponentFixture<GraficasPromexmaSuresteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficasPromexmaSuresteComponent]
    });
    fixture = TestBed.createComponent(GraficasPromexmaSuresteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
