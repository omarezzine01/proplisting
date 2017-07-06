import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import * as firebase from 'firebase/app';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCYzJXhzLQoF2U7IGEyqWuE2DlBKm3u2_w',
    authDomain: 'proplisitngs.firebaseapp.com',
    databaseURL: 'https://proplisitngs.firebaseio.com',
    projectId: 'proplisitngs',
    storageBucket: 'proplisitngs.appspot.com',
    messagingSenderId: '976933048953'
  }
};

const firebaseAuthConfig = {
  provider: new firebase.auth.GoogleAuthProvider(),
  method: AngularFireAuth
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'add-listing', component: AddListingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
