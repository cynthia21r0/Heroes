import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

   private baseUrl: string = environment.baseUrl;
    constructor(private httpClient: HttpClient){}

  getHeroes(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${ this.baseUrl}/heroes`);
  }
  getHeroById(id: string): Observable<Hero|undefined>{
    return this.httpClient.get<Hero>(`${ this.baseUrl}/heroes/${ id }`)
      // pipe (convierte el error a observable)
      .pipe(
        catchError( error=> of(undefined))
      );
  }

}
