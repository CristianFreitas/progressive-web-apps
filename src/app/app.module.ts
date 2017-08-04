import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PhotosPage } from '../pages/photos/photos';
import { SendPhotoPage } from '../pages/send-photo/send-photo';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { ProfilePage } from '../pages/profile/profile';

//conexao
export const environment = {
  firebase: {
    apiKey: "AIzaSyBaoZWCPdXjTDgT6szyaoLZrlgQ3n6wQ-o",
    authDomain: "baltagram-curse.firebaseapp.com",
    databaseURL: "https://baltagram-curse.firebaseio.com",
    projectId: "baltagram-curse",
    storageBucket: "baltagram-curse.appspot.com",
    messagingSenderId: "838553949787"
  }

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    SendPhotoPage,
    TakePicturePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    SendPhotoPage,
    TakePicturePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }