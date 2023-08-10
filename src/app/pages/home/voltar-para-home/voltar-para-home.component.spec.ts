import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarParaHomeComponent } from './voltar-para-home.component';

describe('VoltarParaHomeComponent', () => {
  let component: VoltarParaHomeComponent;
  let fixture: ComponentFixture<VoltarParaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoltarParaHomeComponent]
    });
    fixture = TestBed.createComponent(VoltarParaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
