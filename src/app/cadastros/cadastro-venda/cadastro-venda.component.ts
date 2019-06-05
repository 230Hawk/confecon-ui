import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.scss']
})
export class CadastroVendaComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
