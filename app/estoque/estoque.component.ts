import { Component, Input, OnInit } from '@angular/core';
import DistritoDto from '../dto/DistritoDto';
import { DistritoService } from './distrito-service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  constructor(
    public service:DistritoService
  ) { }

  ngOnInit(): void {
  }

    dto: DistritoDto = new DistritoDto();
    dados: DistritoDto = new DistritoDto();
    @Input() distritoID: string = "";


    buscarDistritos(): void{
    this.service.buscarDistritos(this.distritoID)
    .subscribe(dto => {
        this.dados = dto;
    });
  }


}
