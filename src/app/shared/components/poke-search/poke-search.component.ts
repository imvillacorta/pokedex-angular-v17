import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  standalone: true,
  imports: [],
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent {

  @Output() public emmitSearch = new EventEmitter<string>();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }

}
