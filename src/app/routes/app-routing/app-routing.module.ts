import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';
import { ProdutoDetalheComponent } from 'src/app/pages/produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from 'src/app/pages/produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from 'src/app/pages/produto-editar/produto-editar.component';
import { Error404Component } from 'src/app/pages/error404/error404.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent, data: { title: 'Lista de produtos' } },
  { path: 'produto-detalhe', component: ProdutoDetalheComponent, data: { title: 'Detalhe do produto' } },
  { path: 'produto-novo', component: ProdutoNovoComponent, data: { title: 'Cadatrar novo produto' } },
  { path: 'produto-editar', component: ProdutoEditarComponent, data: { title: 'Editar produto' } },
  { path: '**', component: Error404Component, data: { title: '404' } }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
