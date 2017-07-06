import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  user: Observable<firebase.User>;
  listings: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
       this.user = afAuth.authState;
  }

  getListings() {
    this.listings = this.db.list('/listings');

    return this.listings;
  }
}

interface Listing{

  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?: string;
  bedrooms?:string;
}
