import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      nomeFantasia: [null, Validators.required],
      iEstadual: [null , Validators.required],
      contato: [null ,Validators.required],
      cpfCnpj: [null, Validators.required],

      endereco: this.formBuilder.group({
          cep:[null, Validators.required],
          numero:[null, Validators.required],
          complemento:[null],
          rua:[null, Validators.required],
          bairro:[null, Validators.required],
          cidade:[null, Validators.required],
          estado:[null, Validators.required],
       })
    });
  }

  onSubmit() {
    
  }

}
