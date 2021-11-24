import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import DistritoDto from "../dto/DistritoDto";

@Injectable({
  providedIn: 'root'
})

export class DistritoService {

  constructor(
      private http: HttpClient
    ) {}

    buscarDistritos(distrito: string): Observable<DistritoDto> {


      const endpoint = `http://localhost:8080/api/distritos/${distrito}`;

      return this.http.get<DistritoDto>(endpoint).pipe(
        tap(form => this.log(`fetched sairSistema`)),
        catchError(this.handleError('sairSistema', new DistritoDto()))
      );
    }


    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {


        console.error(error);


        this.log(`${operation} failed: ${error.message}`);


        return of(result as T);
      };
    }
    private log(message: string) {
      console.log(message);
    }


}
