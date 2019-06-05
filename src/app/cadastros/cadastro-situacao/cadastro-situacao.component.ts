import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-situacao',
  templateUrl: './cadastro-situacao.component.html',
  styleUrls: ['./cadastro-situacao.component.scss']
})
export class CadastroSituacaoComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
