import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {Http} from '@angular/http';
import {NgForm} from '@angular/forms';
import {NgProgressService} from 'ng2-progressbar';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;
  http:Http;
  url:URL;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private progress: NgProgressService,
    http:Http,
  ) { }

  ngOnInit() {
      
  }

  onAddSubmit(){
    let listing = {
      title : this.title,
      owner : this.owner,
      city : this.city,
      bedrooms : this.bedrooms,
      price : this.price,
      type : this.type
    }

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

  ngSelectFile(){
  /** request started */
      this.progress.start();
      this.progress.inc(0.3);
        setTimeout(()=>{ 
          this.progress.done();
        }, 2000);
  }
  

}
