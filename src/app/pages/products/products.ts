import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class Products implements OnInit {

  modalAgregar:boolean = false;

  productos:any[] = [];

  ngOnInit(): void {
    this.cargarProductos();
  }

  abrirModal(){
    this.modalAgregar = true;
  }

  cerrarModal(){
    this.modalAgregar = false;
  }

  cargarProductos() {
    const productosGuardados = localStorage.getItem('productos');

    if(productosGuardados){
      this.productos = JSON.parse(productosGuardados);
    }
  }

  agregarProducto(producto:any){

    this.productos.push(producto);

    localStorage.setItem(
      'productos',
      JSON.stringify(this.productos)
    );

    this.cerrarModal();
  }

  eliminarProducto(index:number){

    this.productos.splice(index,1);

    localStorage.setItem(
      'productos',
      JSON.stringify(this.productos)
    );
  }
}
