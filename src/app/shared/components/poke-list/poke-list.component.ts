import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PokeApiService } from '../../../services/poke-api.service';
import { PokeSearchComponent } from '../poke-search/poke-search.component';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [
    PokeSearchComponent
  ],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {
  #pokeApiService = inject(PokeApiService);
  #route = inject(Router);
  #setAllPokemons: any;
  public getAllPokemons: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  ngOnInit(): void {
    this.getListPokemons();
  }

  public getListPokemons() {
    this.#pokeApiService.apilistAllPokemons.subscribe(
      res => {
        this.#setAllPokemons = res.results;
        this.getAllPokemons = this.#setAllPokemons;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public goToDetails(id: number) {
    this.#route.navigate([
      `/details/${id}`,
    ]);
  }

  public getSearch(value: string) {
    const filter = this.#setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });
    this.getAllPokemons = filter;
  }

}
