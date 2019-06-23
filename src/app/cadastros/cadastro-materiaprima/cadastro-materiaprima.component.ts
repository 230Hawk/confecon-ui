import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-materiaprima',
  templateUrl: './cadastro-materiaprima.component.html',
  styleUrls: ['./cadastro-materiaprima.component.scss']
})
export class CadastroMateriaprimaComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      codigo: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  onSubmit(form: FormGroup) {

  }

}
