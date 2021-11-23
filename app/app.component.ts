import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasklist';

  public nome: string = "";



  metodoB(nome: string, idade: number) :number{
    return 1;
  }

}
