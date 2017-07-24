import { Component, OnInit } from '@angular/core';
import{AsyncPipe} from '@angular/common';
import {Router} from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';


import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin:boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    private router:Router,
    ) {
  }

  ngOnInit() {
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(authData) {
      console.log(authData);

    }).catch(function(error) {
      console.log(error);
    });

    this.loggedin = true;
    

  }

  logout(){
    firebase.auth().signOut();

    this.flashMessage.show('You are logged out', 
    {cssClass:'alert-danger', timeout:3000});

    this.loggedin = false;
    console.log('you are out');  
    this.router.navigate(['/']);

  }

}
