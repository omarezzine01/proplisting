import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {NavbarComponent} from 'app/components/navbar/navbar.component';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedin:Boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    public navbarComponent: NavbarComponent,
  
  ) { }

  ngOnInit() {
  }

  login(){
    this.navbarComponent.login();
  }

}
