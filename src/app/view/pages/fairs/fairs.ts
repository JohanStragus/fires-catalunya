import { Component } from '@angular/core';
import { fairs } from '../../../model/fairs';
import { FairCard } from '../../components/fair-card/fair-card';
import { FavoritesPanel } from '../../components/favorites-panel/favorites-panel';

@Component({
  selector: 'app-fairs',
  imports: [FairCard, FavoritesPanel],
  templateUrl: './fairs.html',
  styleUrl: './fairs.css',
})
export class Fairs {
  // Lista completa de ferias (datos originales)
  fairs = fairs;

  // Lista de comarcas sin repetir
  regions = [...new Set(this.fairs.map(fair => fair.regionName))];

  // Comarca seleccionada por el usuario
  selectedRegion: string = '';

  // Lista de ferias filtradas según la comarca seleccionada
  filteredFairs: any[] = [];

  // Controla si el panel lateral está visible
  showFavoritesPanel: boolean = false;

  ///////////////////////////// MÉTODOS /////////////////////////////

  // 1. Método que se ejecuta al seleccionar una comarca
  selectRegion(region: string) {
    this.selectedRegion = region;

    // Filtra las ferias según la comarca seleccionada
    this.filteredFairs = this.fairs.filter(
      fair => fair.regionName === region
    );
  }

  // 2. Obtener favoritos del LocalStorage
  getFavorites() {
    // Obtener los datos de favoritos del LocalStorage
    const data = localStorage.getItem('favorites');

    // Si hay datos
    if (data) {
      // parsear y devolver el array de favoritos
      return JSON.parse(data);
    }
    // Si no hay datos
    else {
      // Devolver un array vacío
      return [];
    }
  }

  // 3. Comprobar si una feria está en favoritos
  isFavorite(fair: any) {
    // Obtener la lista de favoritos
    const favorites = this.getFavorites();

    // recorremos la lista de favoritos
    for (let i = 0; i < favorites.length; i++) {
      // Si en la posición i de favoritos coincide con la feria que queremos comprobar
      if (favorites[i].activityId === fair.activityId) {
        // devolvemos true (está en favoritos)
        return true;
      }
    }
    // en caso contrario, devolvemos false (no está en favoritos)
    return false;
  }

  // 4. Añadir o quitar de favoritos
  toggleFavorite(fair: any) {
    // Obtener la lista de favoritos
    let favorites = this.getFavorites();

    // Si la feria ya está en favoritos
    if (this.isFavorite(fair)) {
      // quitar de favoritos
      favorites = favorites.filter(
        // Si los id son diferntes, se quita de favoritos
        (f: any) => f.activityId !== fair.activityId
      );
    }

    // Si la feria no está en favoritos
    else {
      // añadir a favoritos
      favorites.push(fair);
    }

    // Guardar la lista actualizada de favoritos en LocalStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // 5. Mostrar u ocultar el panel lateral de favoritos
  toggleFavoritesPanel() {
    this.showFavoritesPanel = !this.showFavoritesPanel;
  }

  // 6. Obtener el número de favoritos
  getFavoritesCount() {
    // Obtener los datos de favoritos del LocalStorage
    const data = localStorage.getItem('favorites');

    // si hay datos
    if (data) {
      // parsear y devolver la longitud del array de favoritos
      return JSON.parse(data).length;
    } 
    // si no hay datos
    else {
      // devolver 0
      return 0;
    }
  }
}
