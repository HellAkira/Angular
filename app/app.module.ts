import { BuscarCepService } from './buscar-cep/buscar-cep.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbrirProcessoComponent } from './abrir-processo/abrir-processo.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { FormsModule } from '@angular/forms';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { HttpClientModule } from '@angular/common/http';
import { RenderizaCepComponent } from './renderiza-cep/renderiza-cep.component';
import { EstoqueComponent } from './estoque/estoque.component';

@NgModule({
  declarations: [
    AppComponent,
    AbrirProcessoComponent,
    MensagemComponent,
    BuscarCepComponent,
    RenderizaCepComponent,
    EstoqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BuscarCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
