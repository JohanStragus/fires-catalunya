import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  // Lista de ferias favoritas guardadas en LocalStorage
  favoriteFairs: any[] = this.getFavorites();

  // Obtener favoritos del LocalStorage
  getFavorites() {
    // Obtener los datos de favoritos del LocalStorage
    const data = localStorage.getItem('favorites');

    // si hay datos
    if (data) {
      // parsear y devolver el array de favoritos
      return JSON.parse(data);
    } 
    // si no hay datos
    else {
      // devolver un array vacío
      return [];
    }
  }

  // Eliminar una feria de favoritos
  removeFavorite(fair: any) {
    // Filtrar la lista de favoritos para eliminar la feria seleccionada
    this.favoriteFairs = this.favoriteFairs.filter(
      // Si el activityId de la feria no coincide con el activityId de la feria que queremos eliminar, se mantiene en la lista de favoritos
      favorite => favorite.activityId !== fair.activityId
    );

    // Guardar la lista actualizada de favoritos en LocalStorage
    localStorage.setItem('favorites', JSON.stringify(this.favoriteFairs));
  }
}