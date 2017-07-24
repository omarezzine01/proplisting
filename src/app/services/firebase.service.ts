import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {FileItem} from 'ng2-file-upload'

@Injectable()
export class FirebaseService {
  user: Observable<firebase.User>;
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afDB: AngularFireDatabase,
    ) 
  
  {
       this.user = afAuth.authState;
       this.folder ='listingImages';
  }

  getListings() {
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
        

  }

  getListingDetails(id){

    this.listing = this.afDB.object('/listings/'+id) as FirebaseObjectObservable<any>;
    return this.listing;

  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();

    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){

      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);

      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

  updateListing(id,listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}

interface Listing{

  $key ?: string;
  title ?: string;
  type ?: string;
  image ?: string;
  city ?: string;
  owner ?: string;
  bedrooms ?: string;
  path?: string;
}
