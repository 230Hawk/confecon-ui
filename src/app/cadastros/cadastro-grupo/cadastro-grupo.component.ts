import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-grupo',
  templateUrl: './cadastro-grupo.component.html',
  styleUrls: ['./cadastro-grupo.component.scss']
})
export class CadastroGrupoComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
