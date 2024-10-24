import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajeviComponent } from './klijenti.component';

describe('DjelatniciComponent', () => {
  let component: TecajeviComponent;
  let fixture: ComponentFixture<TecajeviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecajeviComponent]
    });
    fixture = TestBed.createComponent(TecajeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
