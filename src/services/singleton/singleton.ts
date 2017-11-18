import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService{
  private largo:number;
  private ancho:number;
  private sala:any[][];

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
        this.sala[i][j]  = {
          id:[i,j], 
          numer: 0 ,
          isObstaculo: false 
        };
      }
    }
  }

  getMapaL(){
    return this.sala;
  }

  setSala( thing ){
    this.sala = thing;
  }

 }