import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalProduct } from "../../components/modalProduct/modalProduct";

@Component({
  selector: 'app-products',
  imports: [ModalProduct],
  templateUrl: './products.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  modalAgregar:boolean = false;

  abrirModal(){
    this.modalAgregar = true;
  }

  cerrarModal(){
    this.modalAgregar = false;
  }
}
