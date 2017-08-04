import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-send-photo', // <page-login> Conteudo </page-login>
  templateUrl: 'send-photo.html' 
})


export class SendPhotoPage {

  constructor(
     private viewCtrl:ViewController) {

  } 
     dismiss() {
         this.viewCtrl.dismiss();
     }
}
