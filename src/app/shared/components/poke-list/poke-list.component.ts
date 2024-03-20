import { Component, OnInit, inject } from '@angular/core';
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
  
  ngOnInit(): void {
    this.#pokeApiService.apilistAllPokemons.subscribe(
      res => console.log(res)
    )
  }
  


}
