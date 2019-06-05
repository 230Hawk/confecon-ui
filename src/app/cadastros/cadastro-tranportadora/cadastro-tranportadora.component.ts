import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tranportadora',
  templateUrl: './cadastro-tranportadora.component.html',
  styleUrls: ['./cadastro-tranportadora.component.scss']
})
export class CadastroTranportadoraComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
