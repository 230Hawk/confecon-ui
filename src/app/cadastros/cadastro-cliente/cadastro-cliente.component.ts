
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConsultaCepService } from 'src/app/shared/services/consulta-cep.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultaCepService) { }

  ngOnInit() {

    /*
    this.formulario = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(null),
      email: new FormControl(null),
      nomeFantasia: new FormControl(null),
      iEstadual: new FormControl(null),
      contato: new FormControl(null),
      cpfCnpj: new FormControl(null),
      tipo: new FormControl(null),

    })
    */


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

  onSubmit(formulario){
    console.log(this.formulario.value);
    this.http.post('http://localhost:8080/clientes', this.formulario.value)
    .map(resp => resp)
    .subscribe(dados => {
      console.log(dados);
      this.resetar();
    },

    (error: any) => alert('erro'));
    console.log(formulario);
  }


  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
   return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
  }
  populaDadosForm(dados) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
