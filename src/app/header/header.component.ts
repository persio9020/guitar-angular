import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guitrarra } from '../_models/Guitarra';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() carrito: Guitrarra[];
  @Input() guitarra: Guitrarra = new Guitrarra();
  @Output() incrementarCantidad: EventEmitter<number> = new EventEmitter<number>();
  @Output() decrementarCantidad: EventEmitter<number> = new EventEmitter<number>();
  @Output() agregarCarrito: EventEmitter<Guitrarra> = new EventEmitter<Guitrarra>();
  @Output() eliminarProducto: EventEmitter<number> = new EventEmitter<number>();
  @Output() vaciarCarrito: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  totalPagar(): number{
    return this.carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
  }

  incrementaCantidad(cantidad: number): void{
    this.incrementarCantidad.emit(cantidad);
  }

  decrementaCantidad(cantidad: number): void{
    this.decrementarCantidad.emit(cantidad);
  }

  agregaCarrito(guitara: Guitrarra): void{
    this.agregarCarrito.emit(guitara);
  }

  eliminaProducto(id:number): void{
    this.eliminarProducto.emit(id);
  }

  vaciaCarrito(): void{
    this.vaciarCarrito.emit();
  }

}
