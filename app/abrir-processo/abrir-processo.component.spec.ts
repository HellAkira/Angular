import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirProcessoComponent } from './abrir-processo.component';

describe('AbrirProcessoComponent', () => {
  let component: AbrirProcessoComponent;
  let fixture: ComponentFixture<AbrirProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
