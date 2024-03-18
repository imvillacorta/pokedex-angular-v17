import { Component } from '@angular/core';
import { PokeSearchComponent } from '../../shared/components/poke-search/poke-search.component';
import { PokeListComponent } from '../../shared/components/poke-list/poke-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PokeSearchComponent,
    PokeListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
