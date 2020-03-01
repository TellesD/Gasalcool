import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  combustivel:any= {
    gasopa: '',
    alcool: ''
  }
  constructor(private alertCtrl: AlertController) {}
  
  comparar(x){
     console.log(x);
     if(!this.combustivel.alcool||!this.combustivel.gasopa){
     this.presentAlert3()}else{
     if(this.combustivel.alcool>(this.combustivel.gasopa*0.73))
        this.presentAlert();
    if(this.combustivel.alcool<=(this.combustivel.gasopa*0.73))
    this.presentAlert2();}



    

  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
    message: 'Abastecer com gasolina',
    subHeader: 'Sugestão de economia:',
    buttons: ['Okay']
   });
   await alert.present(); 
}
async presentAlert2() {
  const alert = await this.alertCtrl.create({
  message: 'Abastecer com etanol',
  subHeader: 'Sugestão de economia:',
  buttons: ['Okay']
 });
 await alert.present(); 
}
async presentAlert3() {
  const alert = await this.alertCtrl.create({
  message: 'VALOR INVALIDO',
  subHeader: 'ERROR',
  buttons: ['Okay']
 });
 await alert.present(); 
}
}
