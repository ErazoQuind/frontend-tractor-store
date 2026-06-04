import { Component, Input } from '@angular/core';

@Component({
  selector: 'ts-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  /** Nombre del tractor */
  @Input() title = 'Tractor Genérico';

  /** URL de la imagen del tractor */
  @Input() imageUrl = '';

  /** Precio del tractor (Opcional) */
  @Input() price?: number;
}