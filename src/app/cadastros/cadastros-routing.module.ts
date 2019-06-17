import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrosComponent } from './cadastros.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroMateriaprimaComponent } from './cadastro-materiaprima/cadastro-materiaprima.component';
import { CadastroVendaComponent } from './cadastro-venda/cadastro-venda.component';
import { CadastroTranportadoraComponent } from './cadastro-tranportadora/cadastro-tranportadora.component';
import { CadastroGrupoComponent } from './cadastro-grupo/cadastro-grupo.component';
import { CadastroMarcaComponent } from './cadastro-marca/cadastro-marca.component';
import { CadastroSituacaoComponent } from './cadastro-situacao/cadastro-situacao.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';


const routes: Routes = [
    { path: '', component: CadastrosComponent, 
        children: [
            { path: 'cliente', component: CadastroClienteComponent },
            { path: 'usuario', component: CadastroUsuarioComponent },
            { path: 'fornecedor', component: CadastroFornecedorComponent },
            { path: 'produto', component: CadastroProdutoComponent },
            { path: 'materiaprima', component: CadastroMateriaprimaComponent },
            { path: 'venda', component: CadastroVendaComponent },
            { path: 'transportadora', component: CadastroTranportadoraComponent },
            { path: 'grupo', component: CadastroGrupoComponent },
            { path: 'marca', component: CadastroMarcaComponent },
            { path: 'situacao', component: CadastroSituacaoComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CadastrosRoutingModule { }