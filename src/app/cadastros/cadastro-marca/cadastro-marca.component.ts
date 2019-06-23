import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.scss']
})
export class CadastroMarcaComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required]
    });
  }

}
