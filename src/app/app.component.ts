import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router
  ) {
    this.initializeApp();
    this.initializePush();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializePush() {

    // TODO Create a service to manage all states of FCM.
    this.fcm.getToken().then(token => {
      console.log(token);
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log(token);
    });
    this.fcm.onNotification().subscribe(notificationObj => {
      console.log(notificationObj);
      if (notificationObj.wasTapped) {
        console.log('Received in background');
        this.router.navigate([notificationObj.landing_page, { dados: notificationObj.dados }]);
      } else {
        console.log('Received in foreground');
        this.router.navigate(['/tabs/tab1', ]);
        this.router.navigate([notificationObj.landing_page, { dados: notificationObj.dados }]);
      }
    });


    this.fcm.subscribeToTopic('todos');
    this.fcm.subscribeToTopic('laboratorio');

    this.fcm.unsubscribeFromTopic('marketing');
  }
}
