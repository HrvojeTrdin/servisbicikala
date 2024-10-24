import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandidatCreateComponent } from './servis-create.component';

describe('KorisnikCreateComponent', () => {
  let component: KandidatCreateComponent;
  let fixture: ComponentFixture<KandidatCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KandidatCreateComponent]
    });
    fixture = TestBed.createComponent(KandidatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
