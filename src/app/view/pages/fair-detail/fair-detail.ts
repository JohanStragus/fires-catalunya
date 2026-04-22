import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fairs } from '../../../model/fairs';

@Component({
  selector: 'app-fair-detail',
  imports: [],
  templateUrl: './fair-detail.html',
  styleUrl: './fair-detail.css',
})
export class FairDetail {
  // Feria seleccionada
  fair: any;

  // CONSTRUCTOR
  constructor(private route: ActivatedRoute) {
    // Obtener el ID de la feria desde la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Buscar la feria correspondiente en el array de ferias
    this.fair = fairs.find(fair => fair.activityId === id);
  }
}