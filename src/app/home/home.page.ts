import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LoginPageModule } from '../login/login.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
public photoTab: any;
public profileTab: any;

/**
 *
 */
constructor(public navCtrl: NavController) {
  this.photoTab = LoginPage;
  this.profileTab = LoginPageModule;
}
}
