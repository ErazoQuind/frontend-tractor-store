import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';

@Component({
  selector: 'ts-mini-cart',
  standalone: true,  /**
   * No es necesario usar standalone, en la version actual de angular los componentes son standalone por defecto.
   * pero si se usa standalone: false es como obligar a que el componente sea modular a la antigua con declaraciones en el app.module.ts.
   * esto ya no es necesario desde la version 17 de angular. aunque desde la version 14 de angular se puede usar standalone: true.
   */
  templateUrl: './mini-cart.html',
  styleUrls: ['./mini-cart.css']
})
export class MiniCartComponent implements OnInit, OnDestroy {
  /** Cantidad de tractores en el carrito */
  @Input() itemCount = 0;
  
  /** Estado de animación (cuando se añade un producto) */
  @Input() isHighlighted = false;

  // Inyección de dependencias moderna (Angular 14+)
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    window.addEventListener('cart-updated', this.handleCartUpdate);
  }

  ngOnDestroy() {
    window.removeEventListener('cart-updated', this.handleCartUpdate);
  }

  private handleCartUpdate = (event: Event) => {
    const customEvent = event as CustomEvent;
    
    if (customEvent.detail && typeof customEvent.detail.count === 'number') {
      this.itemCount = customEvent.detail.count;
      this.isHighlighted = true;
      this.cdr.detectChanges(); 

      setTimeout(() => {
        this.isHighlighted = false;
        this.cdr.detectChanges();
      }, 1000);
    }
  };
}