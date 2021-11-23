import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizaCepComponent } from './renderiza-cep.component';

describe('RenderizaCepComponent', () => {
  let component: RenderizaCepComponent;
  let fixture: ComponentFixture<RenderizaCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizaCepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderizaCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
