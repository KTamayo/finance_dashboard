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

  stockSymbol:string = "MSFT";
  queryType:string = "TIME_SERIES_MONTHLY";
  seriesSelector:string = "Monthly Time Series";

  searchOptions = {
     stockTimeSeries: {
       queryTypes: [
         "TIME_SERIES_WEEKLY",
         "TIME_SERIES_WEEKLY_ADJUSTED",
         "TIME_SERIES_MONTHLY",
         "TIME_SERIES_MONTHLY_ADJUSTED",
       ]
     },
     cryptocurrencies: {
       queryTypes: [
         "DIGITAL_CURRENCY_WEEKLY",
         "DIGITAL_CURRENCY_MONTHLY"
       ]
     }
  }

  baseUrl = 'https://www.alphavantage.co/';

  queryString = `function=${this.queryType}&symbol=${this.stockSymbol}`;
  url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;

  setSeriesSelector(){
    if(RegExp(/MONTHLY/).test(this.queryType)){
      this.seriesSelector = "Monthly Time Series";
    }
    if(RegExp(/WEEKLY/).test(this.queryType)){
      this.seriesSelector = "Weekly Time Series";
    }
  }

  setQueryType(type){
    this.queryType = type;
    this.setSeriesSelector();
  }

  getAVData(){
    return this.http.get(this.url);
  }

  setStockSymbol(searchTerm){
    this.stockSymbol = searchTerm;
    this.queryString = `function=${this.queryType}&symbol=${this.stockSymbol}`;
    this.url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;
  }
}
