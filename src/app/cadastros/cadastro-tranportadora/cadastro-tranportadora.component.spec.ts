import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTranportadoraComponent } from './cadastro-tranportadora.component';

describe('CadastroTranportadoraComponent', () => {
  let component: CadastroTranportadoraComponent;
  let fixture: ComponentFixture<CadastroTranportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTranportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTranportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
