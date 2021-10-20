import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
// import {} from '@types/googlemaps';
import PlaceResult = google.maps.places.PlaceResult;
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.component.html',
  styleUrls: ['./google-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GoogleAutocompleteComponent implements OnInit {

  addressFormGroup: FormGroup|any;
  addressFormGroup2: FormGroup|any;
  ngOnInit(): void {
    this.addressFormGroup = new FormGroup({
      address: new FormControl(),
    });
    this.addressFormGroup2 = new FormGroup({
      address: new FormControl(),
    });
    this.addressFormGroup.get('address').valueChanges.subscribe((value:any) => console.log('value changed', value));
    this.addressFormGroup2.get('address').valueChanges.subscribe((value:any) => console.log('value changed', value))
  }

}
