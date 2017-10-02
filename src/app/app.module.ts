import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./app.routing";
import { AuthGuard } from "./guards/auth.guard";
import { HttpUtilService } from "./services/http-util-service";
import { LoginComponent } from './login/login.component';
import { LoginService } from "./services/login-service";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyDK-LQ6ZLCUnSvVHNSjDvdAbKDvbuIbUOQ",
  authDomain: "angular-auth-d6e08.firebaseapp.com",
  databaseURL: "https://angular-auth-d6e08.firebaseio.com",
  projectId: "angular-auth-d6e08",
  storageBucket: "angular-auth-d6e08.appspot.com",
  messagingSenderId: "630368996164"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard, HttpUtilService, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
