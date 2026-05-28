import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output , EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-modal-product',
  imports: [CommonModule],
  templateUrl: './modalProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalProduct {

  @Input() visible:boolean = false;

  @Output() cerrar = new EventEmitter<void>();


  cerrarModal(){
    this.cerrar.emit();
  }

}
