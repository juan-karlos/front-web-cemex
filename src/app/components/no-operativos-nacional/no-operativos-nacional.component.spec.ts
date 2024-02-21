import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperativosNacionalComponent } from './no-operativos-nacional.component';

describe('NoOperativosNacionalComponent', () => {
  let component: NoOperativosNacionalComponent;
  let fixture: ComponentFixture<NoOperativosNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoOperativosNacionalComponent]
    });
    fixture = TestBed.createComponent(NoOperativosNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
