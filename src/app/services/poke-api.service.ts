import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  #http = inject(HttpClient);
  #api: string = environment.api;

  get apilistAllPokemons(): Observable<any> {
    return this.#http.get<any>(this.#api).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.#http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

}
