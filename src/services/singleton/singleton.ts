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
          id:(String(i)+","+String(j)), 
          numer: 0 ,
          isObstaculo: false 
        };
      }
    }
  }

  getMapaL(){
    return this.sala;
  }

  cambioEstado( posi ){
   
   if(this.sala[posi[0]][posi[1]].isObstaculo){
    this.sala[posi[0]][posi[1]] = 1;
    this.sala[posi[0]][posi[1]].isObstaculo = true;
   }
   else{
    this.sala[posi[0]][posi[1]].isObstaculo = false;
    this.sala[posi[0]][posi[1]] = 0;
   }
   console.log(this.sala);
  }

 }