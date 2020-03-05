import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './pages/produto-novo/produto-novo.component';
import { ProdutoEditarComponent } from './pages/produto-editar/produto-editar.component';
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalheComponent,
    ProdutoNovoComponent,
    ProdutoEditarComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
