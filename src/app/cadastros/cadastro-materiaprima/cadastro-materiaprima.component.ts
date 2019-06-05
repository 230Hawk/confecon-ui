import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-materiaprima',
  templateUrl: './cadastro-materiaprima.component.html',
  styleUrls: ['./cadastro-materiaprima.component.scss']
})
export class CadastroMateriaprimaComponent implements OnInit {

  formulario: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
