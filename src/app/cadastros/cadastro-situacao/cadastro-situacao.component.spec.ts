import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSituacaoComponent } from './cadastro-situacao.component';

describe('CadastroSituacaoComponent', () => {
  let component: CadastroSituacaoComponent;
  let fixture: ComponentFixture<CadastroSituacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSituacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
