import { Component, OnInit } from '@angular/core';
import{AsyncPipe} from '@angular/common';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin:boolean = false;

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

    //provider.addScope('https://www.googleapis.com/auth/plus.login');

    /*provider.setCustomParameters({
    'login_hint': 'omarezzine39@gmail.com'
  });*/

    firebase.auth().signInWithPopup(provider).then(function(authData) {
      console.log(authData);
      console.log('you are in');
    }).catch(function(error) {
      console.log(error);
    });

    this.loggedin = true;

  }

  logout(){
    firebase.auth().signOut();
    this.loggedin = false;
    console.log('you are out');  
  }

}
