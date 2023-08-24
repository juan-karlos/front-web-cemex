import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOperativosPacificoComponent } from './no-operativos-pacifico.component';

describe('NoOperativosPacificoComponent', () => {
  let component: NoOperativosPacificoComponent;
  let fixture: ComponentFixture<NoOperativosPacificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoOperativosPacificoComponent]
    });
    fixture = TestBed.createComponent(NoOperativosPacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
