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

  // addressFormGroup: FormGroup|any;
  addressFormGroup2: FormGroup|any;
  ngOnInit(): void {
    // this.addressFormGroup = new FormGroup({
    //   address: new FormControl(),
    // });
    this.addressFormGroup2 = new FormGroup({
      address: new FormControl(),
      address2:new FormControl(),
      address1:new FormControl(),
      city:new FormControl(),
      zipcode:new FormControl(),
      country:new FormControl()
    });
    // this.addressFormGroup.get('address').valueChanges.subscribe((value:any) => console.log('value changed', value));
    this.addressFormGroup2.get('address').valueChanges.subscribe((value:any) =>{
       this.updateFormValue(value); 
    })
  }

  updateFormValue(value:any){
    console.log(value.address_components);
    let acountry=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("country"));
    let aZip=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("postal_code"));
    let aCity=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("locality"));

    let stnumber=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("street_number"));
    let route=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("route"));
    let neighborhood=value.address_components.find((ad: { types: string | any[]; })=>ad.types.includes("neighborhood"));
    //console.log(aCity);
    this.addressFormGroup2.patchValue({
      address2:stnumber?.long_name+route?.long_name,
      address1:neighborhood?.long_name,
      city:aCity?.long_name,
      country: acountry?.long_name, 
      zipcode:aZip?.long_name   
    });
  }

}
