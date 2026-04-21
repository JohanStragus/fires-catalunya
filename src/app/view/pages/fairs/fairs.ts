import { Component } from '@angular/core';
import { fairs } from '../../../model/fairs';

@Component({
  selector: 'app-fairs',
  imports: [],
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

  // Método que se ejecuta al seleccionar una comarca
  selectRegion(region: string) {
    this.selectedRegion = region;

    // Filtra las ferias según la comarca seleccionada
    this.filteredFairs = this.fairs.filter(
      fair => fair.regionName === region
    );
  }
}
