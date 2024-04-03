import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPorRegistroComponent } from './documentos-por-registro.component';

describe('DocumentosPorRegistroComponent', () => {
  let component: DocumentosPorRegistroComponent;
  let fixture: ComponentFixture<DocumentosPorRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentosPorRegistroComponent]
    });
    fixture = TestBed.createComponent(DocumentosPorRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
