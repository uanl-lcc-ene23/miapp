import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreenPlugin } from '@capacitor/splash-screen/dist/esm/definitions';
import { StatusBarPlugin } from '@capacitor/status-bar/dist/esm/definitions';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private  splashscreen: SplashScreenPlugin,
    private statusBar: StatusBarPlugin
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.setStyle();
      this.splashscreen.hide();
    });
  }}