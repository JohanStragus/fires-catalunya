import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fair-card',
  imports: [RouterLink],
  templateUrl: './fair-card.html',
  styleUrl: './fair-card.css',
})
export class FairCard {
  // Feria que recibe el componente
  @Input() fair: any;

  // Indica si la feria ya es favorita
  @Input() isFavorite: boolean = false;

  // Evento para añadir o quitar de favoritos
  @Output() favoriteClicked = new EventEmitter<void>();
}