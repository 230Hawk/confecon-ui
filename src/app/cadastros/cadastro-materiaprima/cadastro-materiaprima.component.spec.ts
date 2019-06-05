import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMateriaprimaComponent } from './cadastro-materiaprima.component';

describe('CadastroMateriaprimaComponent', () => {
  let component: CadastroMateriaprimaComponent;
  let fixture: ComponentFixture<CadastroMateriaprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMateriaprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMateriaprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
