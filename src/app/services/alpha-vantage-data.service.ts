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
  
  constructor(private http: HttpClient) { }
  
  stockSymbol:string="MSFT";
  queryType = 'TIME_SERIES_MONTHLY';
  baseUrl = 'https://www.alphavantage.co/';
  
  queryString = `function=${this.queryType}&symbol=${this.stockSymbol}`;
  url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;
  
  getAVData(){
    return this.http.get(this.url);
  }
  
  setStockSymbol(searchTerm){
    this.stockSymbol = searchTerm;
    this.queryString = `function=${this.queryType}&symbol=${this.stockSymbol}`;
    this.url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;
  }
}
