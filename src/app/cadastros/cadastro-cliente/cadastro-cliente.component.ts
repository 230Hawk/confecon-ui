
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
      iEstadual: [null, Validators.required],
      contato: [null, Validators.required],
      cpfCnpj: [null, Validators.required],
      telefone1: [null, Validators.required],
      telefone2: [null],
      telefone3: [null],
       
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

  onSubmit(formulario) {

    if (this.formulario.valid){

      console.log(this.formulario.value);
      this.http.post('http://localhost:8080/clientes', this.formulario.value)
        .map(resp => resp)
        .subscribe(dados => {
          console.log(dados);
          this.resetar();
        });
      console.log(formulario);

    }else{
      console.log("formulario invalido");
      this.verificaValidacoesForm(this.formulario);
    }
   
  }

  verificaValidacoesForm(formGroup: FormGroup){

    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    }); 
  }


  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo) {
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

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
