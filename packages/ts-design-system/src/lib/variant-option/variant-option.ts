import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-variant-option',
  templateUrl: './variant-option.html',
  styleUrls: ['./variant-option.css']
})
export class VariantOptionComponent {
  /** Texto de la variante */
  @Input() label = 'Opción';
  
  /** Estado de selección */
  @Input() selected = false;

  /** Emite el nuevo estado cuando se hace clic */
  @Output() toggled = new EventEmitter<boolean>();

  onClick() {
    this.toggled.emit(!this.selected);
  }
}