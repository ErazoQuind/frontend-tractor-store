import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-button',
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