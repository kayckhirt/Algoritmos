import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorDeSenhaComponent } from './gerador-de-senha.component';

describe('GeradorDeSenhaComponent', () => {
  let component: GeradorDeSenhaComponent;
  let fixture: ComponentFixture<GeradorDeSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeradorDeSenhaComponent]
    });
    fixture = TestBed.createComponent(GeradorDeSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
