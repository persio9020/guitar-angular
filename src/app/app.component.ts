import { Component, OnInit } from '@angular/core';
import { Guitrarra } from './_models/Guitarra';
import { GUITARRAS } from './data/mock-guitarras';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'guitar-angular';
  guitarras: Guitrarra[]=[];
  carrito: Guitrarra[]=[];
  guitarra: Guitrarra;

  ngOnInit(): void {
    this.guitarras = GUITARRAS;
    this.guitarra = GUITARRAS[10];

    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
      this.carrito = JSON.parse(carritoStorage);
    }
  }

  guardarCarrito(guitarra: Guitrarra): void {
    const existeCarrito = this.carrito.findIndex(producto => producto.id === guitarra.id);
    if (existeCarrito >= 0) {
       this.carrito[existeCarrito].cantidad++;
     } else {
       guitarra.cantidad = 1
      this.carrito.push(guitarra);
     }
     this.guardarLocalStorage();
  }

  decrementarCantidad(id: number): void {
    const index = this.carrito.findIndex(producto => producto.id === id);
    if (this.carrito[index].cantidad <= 1) return;
    this.carrito[index].cantidad--;
    this.guardarLocalStorage();
  }

  incrementarCantidad(id: number): void {
    const index = this.carrito.findIndex(producto => producto.id === id);
    if (this.carrito[index].cantidad >= 5) return;
    this.carrito[index].cantidad++;
    this.guardarLocalStorage();
  }

  eliminarProducto(id: number): void{
    this.carrito = this.carrito.filter(producto => producto.id !== id);
    this.guardarLocalStorage();
  }

  vaciarCarrito():void{
    this.carrito = [];
    this.guardarLocalStorage();
  }

  guardarLocalStorage(): void{
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
