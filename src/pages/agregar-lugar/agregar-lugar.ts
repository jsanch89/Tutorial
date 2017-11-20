import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AggUbicacionPage } from '../agg-ubicacion/agg-ubicacion';
import { SingletonService } from '../../services/singleton/singleton';
//import { AggUbicacionPage } from '../agg-ubicacion/agg-ubicacion';
/**
 * Generated class for the AgregarLugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-lugar',
  templateUrl: 'agregar-lugar.html',
})
export class AgregarLugarPage {
  nombre:String;
  posicion:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public singleton: SingletonService, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarLugarPage');
  }

  aggUbicacion(){
     const myModal = this.modal.create( AggUbicacionPage, {} );
     myModal.present();
     myModal.onDidDismiss(data => this.posicion = data );
  }

}
