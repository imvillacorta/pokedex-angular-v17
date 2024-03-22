import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PokeApiService } from '../../../services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {
  #pokeApiService = inject(PokeApiService);
  #route = inject(Router);
  public getAllPokemons: any;

  ngOnInit(): void {
    this.#pokeApiService.apilistAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    )
  }

  public goToDetails(id: number) {
    this.#route.navigate([
      `/details/${id}`,
    ]);
  }

}
