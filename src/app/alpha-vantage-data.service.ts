import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageDataService {
  
  baseUrl='https://www.alphavantage.co/';
  symbol='MSFT';
  apiKey=environment.apiKey;
  url=`${baseUrl}query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`;
  
  constructor(public http: HttpModule) { }
  
  getAlphaVantageData(){
    return this.http.get(this.url)
      .map( res => res.json())
  }
}
