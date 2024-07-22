import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Guitrarra } from '../_models/Guitarra';

@Component({
  selector: 'app-guitarra',
  templateUrl: './guitarra.component.html',
  styleUrls: ['./guitarra.component.scss']
})
export class GuitarraComponent implements OnInit {
  @Input() guitarra: Guitrarra;
  @Output() agregarCarrito: EventEmitter<Guitrarra> = new EventEmitter<Guitrarra>();

  constructor() { }

  ngOnInit(): void {
  }

  agregaCarrito(guitarra: Guitrarra):void{
    this.agregarCarrito.emit(guitarra);
  }
  

}
