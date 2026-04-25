import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-panel',
  imports: [RouterLink],
  templateUrl: './favorites-panel.html',
  styleUrl: './favorites-panel.css',
})
export class FavoritesPanel {
  // Lista de favoritos guardados
  favoriteFairs: any[] = this.getFavorites();

  // Obtener favoritos del LocalStorage
  getFavorites() {
    const data = localStorage.getItem('favorites');

    // si hay datos
    if (data) {
      // Parsear y devolver el array de favoritos
      return JSON.parse(data);
    } 
    // Si no hay datos
    else {
      // Devolver un array vacío
      return [];
    }
  }

  // Ejecuta cuando Angular detecta cambios
  ngDoCheck() {
    this.favoriteFairs = this.getFavorites();
  }

  // Eliminar una feria de favoritos
  removeFavorite(fair: any) {
    // Filtrar la lista de favoritos para eliminar la feria seleccionada
    this.favoriteFairs = this.favoriteFairs.filter(
      favorite => favorite.activityId !== fair.activityId
    );

    // Guardar la lista actualizada en LocalStorage
    localStorage.setItem('favorites', JSON.stringify(this.favoriteFairs));
  }
}