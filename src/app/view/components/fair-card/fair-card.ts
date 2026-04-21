import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fair-card',
  imports: [],
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