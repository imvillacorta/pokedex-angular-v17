import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `teste de reset
  <router-outlet />
  `
})
export class AppComponent {
  title = 'pokedex-angular-v17';
}
