import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MelissaAddressSearchService {

  constructor(private http: HttpClient) { }
  opts = [];
  // getDataV2() {
  //       return this.opts.length ?
  //         of(this.opts) :
  //         this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
  // }
  getData(){
    let url='http://address.melissadata.net/V3/WEB/GlobalAddress/doGlobalAddress'+
    '?t=venkat'+
    '&id=Np4yD6o1VRW92KJQ_8B_ks**'+
    '&opt=LineSeparator:Pipe'+
    '&org=student'+
    '&a1=San Bernardino Co'+
    '&a2='+
    '&a3='+
    '&a4='+
    '&a5='+
    '&a6='+
    '&a7='+
    '&a8='+
    '&ddeploc='+
    '&deploc='+
    '&loc='+
    '&subadmarea='+
    '&admarea='+
    '&subnatarea='+
    '&postal='+
    '&ctry='+
    '&format=JSON';
  return  this.http.get(url);
  }

  async getv3(searchtext:string){
    let url='https://expressentry.melissadata.net/jsonp/ExpressFreeForm?callback=jQuery34104218799472466632_1634518658875&format=jsonp&id=T%3AmepLnj4yuDeGXNqvctMtCN**GfuAHS60ITOqEwm10Wuur2**&FF='+searchtext+'&maxrecords=15&_=1634518658879';
    //return this.http.get(url);
    return await this.http.get(url).toPromise().then((data: any) => {     
      return data;
    }).catch((error) => {
      return null;
    });
  }
}

