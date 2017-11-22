import { Injectable } from '@angular/core';

@Injectable()
export class AEstrellaService{
private meta:Nodo; //Posición meta (x,y)
private inicio:Nodo; //Posición inicio (x,y)
private mapa:any[][]; //Mapa en el que se realizará el recorrido
private ruta = [];
//Cremos una lista abierta dónde irán los nodos adyacentes
//y una lista cerrada dónde irán los nodos transitados
 private listaAbierta = new Set();
 private listaCerrada = new Set();

//Constructo que recibe un mapa, un inicio y una meta
constructor(){

}

calcularRuta(mapa,inicio,meta){
    this.mapa = this.convertirMapa(mapa);
    this.inicio = this.convertirNodo(inicio);
    this.meta = this.convertirNodo(meta);
    //this.recorrido();
    //this.retornarRuta();
    console.log(this.mapa);
}

convertirNodo( obj ){
    let nueObj:any = obj;
    let x = nueObj.x;
    let y = nueObj.y; 
  return new Nodo( {x,y},false);
}
convertirMapa( mapa ){
    let nueMapa:Nodo[][];
    nueMapa = [];
    for (let i=0; i<mapa.length; i++){
        nueMapa[i]=[];
        for(let j=0; j<mapa.length; j++){
            nueMapa[i][j] = new Nodo({i,j}, mapa[i][j].isObstaculo); 
        }
    }
    return nueMapa;
}


recorrido(){
        //Añadimos el inicio a la lista cerrada & añadimos sus vecinos a la lista abierta
        let nodoActual = this.inicio;
        let auxNodoMinimo;
        let auxPesoMinimo;
            while(nodoActual != this.meta){
                
            let auxNodoMinimo = nodoActual;
            let auxPesoMinimo = 10000;
            this.listaCerrada.add(nodoActual);
            this.calcularVecinos(nodoActual);
            //Por cada vecino...
            for (let vecino in nodoActual.vecinos) {
            //Mientras no sea obstaculo y no este en la lista abierta
            //Calculamos Manhattan & su peso total
            if(nodoActual.vecinos[vecino].obstaculo == false){
            if(!this.listaAbierta.has(nodoActual.vecinos[vecino]) && !this.listaCerrada.has(nodoActual.vecinos[vecino])){
                nodoActual.vecinos[vecino].calcularDisManhattan(this.meta.posicion);
                nodoActual.vecinos[vecino].calcularPesoTotal((nodoActual.pesoPadre));
                //Añadimos los vecinos a la lista abierta, ponemos el padre común para los vecinos
                nodoActual.vecinos[vecino].ponerPadre(nodoActual);
                this.listaAbierta.add(nodoActual.vecinos[vecino]);  
            }
            }        
            }
            //Buscamos el nodo con el mínimo peso para hacer la transición
               let auxListaAbierta = Array.from(this.listaAbierta);
            for(let nodo in auxListaAbierta){
                if(auxPesoMinimo > auxListaAbierta[nodo].pesoTotal){
                auxPesoMinimo = auxListaAbierta[nodo].pesoTotal;
                auxNodoMinimo = auxListaAbierta[nodo];
                }
            }
            
            //Buscamos el nodo mínimo en la lista abierta y lo eliminamos(Filtramos siendo más exacto)
            //Lo añadimos a la lista cerrada
            this.listaCerrada.add(auxNodoMinimo);
            this.listaAbierta.delete(auxNodoMinimo);

            //Convertimos el nodo actual con el actual nodo minimo 
            nodoActual = auxNodoMinimo;       
        }
    } 

//Retorna un arreglo con la ruta 
retornarRuta(){
    this.ruta = [];
    let nodoActual = this.meta;
    while(nodoActual != this.inicio){
        this.ruta.push(nodoActual.posicion);
        nodoActual = nodoActual.nodoPadre;
    }
    this.ruta.push(this.inicio);
    this.ruta.reverse();
}
    
//Calcula los posibles vecinos para un nodo
calcularVecinos(nodo){
    let xPos = nodo.posicion[0];
    let yPos = nodo.posicion[1];


    let maxRow =this.mapa.length-1;
    let maxColumn = this.mapa[0].length-1;
    //Verifica si existe (x-1,y)
    if(xPos > 0){
        //Si existe añade el vecino
        if(this.mapa[xPos-1][yPos].obstaculo == false){
            nodo.añadirVecino(this.mapa[xPos-1][yPos]);
        } 
    
    }
    //Verifica si existe(x,y-1)
    if(yPos > 0){
        //Si existe añade el vecino
        if(this.mapa[xPos][yPos-1].obstaculo == false){
        nodo.añadirVecino(this.mapa[xPos][yPos-1]);
        }
        
    }
    //Verifica si existe(x+1,y)
    if(xPos < maxRow){
        //Si existe añade el vecino
         if(this.mapa[xPos+1][yPos].obstaculo == false){
         nodo.añadirVecino(this.mapa[xPos+1][yPos]);
        }
    
    }
    //Verifica si existe(x,y+1)
    if(yPos < maxColumn){
        //Si existe añade el vecino
         if(this.mapa[xPos][yPos+1].obstaculo == false){
         nodo.añadirVecino(this.mapa[xPos][yPos+1]);
        }
    }
   
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
    