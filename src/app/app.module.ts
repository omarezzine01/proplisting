import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdInputModule, MdSelectModule} from '@angular/material';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages'
import * as firebase from 'firebase/app';
import { NgProgressModule } from 'ng2-progressbar';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { NgProgressComponent } from './ng-progress-component/ng-progress.component';

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
  {path: 'listing/:id', component:ListingComponent},
  { path: 'add-listing', component: AddListingComponent },
  {path: 'edit-listing/:id', component:EditListingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    NgProgressComponent,
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    NgProgressModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule

  ],
  
  providers: [FirebaseService, AngularFireAuth,NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
