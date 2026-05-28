import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './modalProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalProduct {

  @Input() visible: boolean = false;

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();


  producto = {
    nombre: '',
    codigo: '',
    categoria: '',
    precio: 0,
    stock: 0
  }

  guardarProducto() {
    this.guardar.emit(this.producto);
  }
  cerrarModal() {
    this.cerrar.emit();
  }

}
