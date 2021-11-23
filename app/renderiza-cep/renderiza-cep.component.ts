import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BuscarCepService } from '../buscar-cep/buscar-cep.service';
import CepDto from '../dto/CepDto';

@Component({
  selector: 'app-renderiza-cep',
  templateUrl: './renderiza-cep.component.html',
  styleUrls: ['./renderiza-cep.component.css']
})
export class RenderizaCepComponent implements OnInit {

  constructor(
    public service: BuscarCepService
  ) { }
  ngOnInit(): void {
  }

  dto: CepDto = new CepDto();
  dados: CepDto = new CepDto();

  @Input() cep: string = "";

  buscarCep(): void{
    this.service.buscarCep(this.cep)
    .subscribe(dto => {
        this.dados = dto;
    });
  }

}
