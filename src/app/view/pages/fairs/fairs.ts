import { Component } from '@angular/core';
import { fairs } from '../../../model/fairs';

@Component({
  selector: 'app-fairs',
  imports: [],
  templateUrl: './fairs.html',
  styleUrl: './fairs.css',
})
export class Fairs {
  // utilizamos el array de ferias importado para mostrarlo en la vista
  fairs = fairs;

  // obtenemos las regiones únicas de las ferias para mostrar en el filtro
  regions = [...new Set(this.fairs.map(fair => fair.regionName))];
}
