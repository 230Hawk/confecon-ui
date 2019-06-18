import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroMateriaprimaComponent } from './cadastro-materiaprima/cadastro-materiaprima.component';
import { CadastroVendaComponent } from './cadastro-venda/cadastro-venda.component';
import { CadastroTranportadoraComponent } from './cadastro-tranportadora/cadastro-tranportadora.component';
import { CadastroGrupoComponent } from './cadastro-grupo/cadastro-grupo.component';
import { CadastroMarcaComponent } from './cadastro-marca/cadastro-marca.component';
import { CadastroSituacaoComponent } from './cadastro-situacao/cadastro-situacao.component';
import { SharedModule } from '../shared/shared.module';
import { CadastrosComponent } from './cadastros.component';


@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    CadastroClienteComponent,
    CadastroFornecedorComponent,
    CadastroProdutoComponent,
    CadastroMateriaprimaComponent,
    CadastroVendaComponent,
    CadastroTranportadoraComponent,
    CadastroGrupoComponent,
    CadastroMarcaComponent,
    CadastroSituacaoComponent,
    CadastrosComponent,
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class CadastrosModule {
  
 }
