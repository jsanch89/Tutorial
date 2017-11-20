import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarLugarPage } from './agregar-lugar';

@NgModule({
  declarations: [
    AgregarLugarPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarLugarPage),
  ],
})
export class AgregarLugarPageModule {}
