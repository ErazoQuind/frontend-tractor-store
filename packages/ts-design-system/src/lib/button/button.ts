import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ts-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class ButtonComponent {
  /** Variante visual del botón */
  @Input() variant: 'primary' | 'secondary' = 'primary';

  /** Tamaño del botón */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** Texto a mostrar en el botón */
  @Input() label = 'Botón';

  /** Emite un evento cuando se hace clic */
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    this.clicked.emit(event);
  }
}