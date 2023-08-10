import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDecimalRomanoComponent } from './conversor-decimal-romano.component';

describe('ConversorDecimalRomanoComponent', () => {
  let component: ConversorDecimalRomanoComponent;
  let fixture: ComponentFixture<ConversorDecimalRomanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversorDecimalRomanoComponent]
    });
    fixture = TestBed.createComponent(ConversorDecimalRomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
