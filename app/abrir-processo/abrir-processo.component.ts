import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tag-abrir-processo',
  templateUrl: './abrir-processo.component.html',
  styleUrls: ['./abrir-processo.component.css']
})
export class AbrirProcessoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nomeComponentePai: string = "";
  public sobrenomeComponentePai: string = "";
  public cep: string = "";
  public logradouro: string = "";

  receberLogradouroComponenteFilho(logradouro: string): void{
    this.logradouro = logradouro;
  }
}
