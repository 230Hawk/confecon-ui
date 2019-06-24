import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome:[null, Validators.required],
      descricao: [null, Validators.required]
    })
  }

}
