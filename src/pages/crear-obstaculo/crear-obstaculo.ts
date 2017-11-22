import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingletonService } from '../../services/singleton/singleton';

/**
 * Generated class for the CrearObstaculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-obstaculo',
  templateUrl: 'crear-obstaculo.html',
})
export class CrearObstaculoPage {
 ancho:number;
 largo:number;
 sala:any[][];

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonService) {
    this.sala = singleton.getMapaL();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearObstaculoPage');
  }

  crear(){
    this.singleton.setSala(this.sala);
    this.navCtrl.pop();
    this.navCtrl.pop();
  }
  
}

class Nodo{
  //Calculamos la distancia de Manhattan entre el nodo final & este nodo
  distanciaManhattan:number;
  //(x,y)
  posicion:number[];
  //¿Es esta parte un obstaculo?  
  obstaculo:boolean;
  //Todos los nodos que se encuentra alrededor de él
  vecinos:Nodo[] = [];
  //Peso total para la transición de una casilla a otra
  pesoTotal:number;
  //Valor de G(O más bien valor del paso de un lugar a otro unitario, para todos es el mismo debido a que no hay diagonales)
  pesoUnitario:number = 10;
  //Nodo desde el que es dirigido
  nodoPadre:Nodo  = null;

  pesoPadre:number = 0;
  //Constructor
  constructor(posicion,obstaculo){
      this.posicion = posicion;
      this.obstaculo = obstaculo;
  }

  ponerPadre(nodo) {
      this.pesoPadre = nodo.pesoPadre += 10;
      this.nodoPadre = nodo;
  }

  calcularPesoTotal(gExtra){
      this.pesoTotal = gExtra + this.pesoUnitario + this.distanciaManhattan;
  }

  obtenenerPosicion(){
      return this.posicion;
  }

  añadirVecino(nodo){
      this.vecinos.push(nodo);
  }

  //Se define como el valor entre la suma de cada resta por componente en valor absoluto |(X-Xf)| + |(Y-Yf)|
  calcularDisManhattan(nodoFinal){       
      this.distanciaManhattan = Math.abs(this.posicion[0]-nodoFinal[0]) + Math.abs(this.posicion[1]-nodoFinal[1]);
  }
}