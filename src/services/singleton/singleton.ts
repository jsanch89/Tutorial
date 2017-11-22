import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService{
  private largo:number;
  private ancho:number;
  private sala:any[][];
  private list = [];
  private cont = 0;
  private inicio;
  private fin;
  
  constructor() {
  }

  setLargo(value) {
    this.largo = value;
  }

  setAncho(value) {
    this.ancho = value;
  }

  getMyGlobalVar() {
    return this.largo;
  }

  crearMapaL(){
    this.sala = [];
    
    for(var i= 0; i< this.largo; ++i){
      this.sala[i] = [];
      for( var j = 0; j < this.ancho; ++j){
        this.sala[i][j]  = {posicion: [i, j],obstaculo:0};
      }
    }
  }

  getMapaL(){
    return this.sala;
  }

  setSala( thing ){
    this.sala = thing;
  }

  agregarLugar( lugar ){
    this.list[this.cont] = {nombre: lugar.nombre, x: lugar.posX, y: lugar.posY};
    console.log( this.list );
    this.cont+=1;
    
  }

  getLugares(){
    return this.list;
  }

  setInicio( inicio ){
    this.inicio = inicio;
  }

  setFinal( fin ){
    this.fin = fin;
  }

}