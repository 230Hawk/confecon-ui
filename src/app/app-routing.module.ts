import { FormsModule } from '@angular/forms';
import { CadastroSituacaoComponent } from './cadastros/cadastro-situacao/cadastro-situacao.component';
import { CadastroMarcaComponent } from './cadastros/cadastro-marca/cadastro-marca.component';
import { CadastroGrupoComponent } from './cadastros/cadastro-grupo/cadastro-grupo.component';
import { CadastroTranportadoraComponent } from './cadastros/cadastro-tranportadora/cadastro-tranportadora.component';
import { CadastroVendaComponent } from './cadastros/cadastro-venda/cadastro-venda.component';
import { CadastroMateriaprimaComponent } from './cadastros/cadastro-materiaprima/cadastro-materiaprima.component';
import { CadastroProdutoComponent } from './cadastros/cadastro-produto/cadastro-produto.component';
import { CadastroFornecedorComponent } from './cadastros/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './cadastros/cadastro-cliente/cadastro-cliente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastroUsuarioComponent } from './cadastros/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cadastros/cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastros/cadastro-cliente', component: CadastroClienteComponent},
  { path: 'cadastros/cadastro-fornecedor', component: CadastroFornecedorComponent},
  { path: 'cadastros/cadastro-produto', component: CadastroProdutoComponent },
  { path: 'cadastros/cadastro-materiaprima', component: CadastroMateriaprimaComponent},
  { path: 'cadastros/cadastro-venda', component: CadastroVendaComponent},
  { path: 'cadastros/cadastro-transportadora', component: CadastroTranportadoraComponent },
  { path: 'cadastros/cadastro-grupo', component: CadastroGrupoComponent },
  { path: 'cadastros/cadastro-marca', component: CadastroMarcaComponent },
  { path: 'cadastros/cadastro-situacao', component: CadastroSituacaoComponent },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
