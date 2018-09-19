import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageDataService {
  apiKey=environment.apiKey;
  
  symbol='MSFT';
  // queryType='GLOBAL_QUOTE';
  queryType='TIME_SERIES_MONTHLY_ADJUSTED';
  
  baseUrl='https://www.alphavantage.co/';
  queryString=`function=${this.queryType}&symbol=${this.symbol}&apikey=${this.apiKey}`;
  url=`${this.baseUrl}query?${this.queryString}`;
  
  constructor(private http: HttpClient) { }
  
  allData: any[];
  getAVData(){
    return this.http.get(this.url)
  }
}
