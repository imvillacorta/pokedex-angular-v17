import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent implements OnInit {
  #route = inject(Router);
  #pokeApiService = inject(PokeApiService);
  public getId = signal<null | string>(null);
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  // RESGATA PARAMETRO ID QUE VEM DA URL
  @Input() set id(id: string) {
    this.getId.set(id);
  }

  ngOnInit(): void {
    this.getDetailsPokemon();
  }

  public getDetailsPokemon() {
    this.#pokeApiService.detailsPokemon(this.getId())
      .subscribe(
        res => {
          this.pokemon = res;
          this.isLoading = true;
        },
        error => {
          this.apiError = true;
        }
      )
  }

  public toGoBack() {
    this.#route.navigate(['']);
  }

}
