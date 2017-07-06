import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    provider.setCustomParameters({
    'login_hint': 'zsagia@gmail.com'
  });

    firebase.auth().signInWithPopup(provider).then(function(authData) {
      console.log(authData);
    }).catch(function(error) {
      console.log(error);
    });
  }

}
