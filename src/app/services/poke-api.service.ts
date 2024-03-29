import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, forkJoin, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  #http = inject(HttpClient);
  #apiPokemon: string = environment.apiPokemon;
  #apiPokemonSpecies: string = environment.apiPokemonSpecies;

  get apilistAllPokemons(): Observable<any> {
    return this.#http.get<any>(this.#apiPokemon + '?offset=0&limit=100').pipe(
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

  public detailsPokemon(id: any) {
    const pokemon = this.apiGetPokemons(this.#apiPokemon + `${id}`);
    const speciesPokemon = this.apiGetPokemons(this.#apiPokemonSpecies + `${id}`);

    return forkJoin([pokemon, speciesPokemon]);
  }

}
