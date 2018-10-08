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

  assetSymbol:string = "MSFT";
  assetType:string = 'stock';
  queryType:string = "TIME_SERIES_MONTHLY";
  seriesSelector:string = "Monthly Time Series";
  refreshSelector:string = "3. Last Refreshed";
  labelSelector:string = "4. close";

  baseUrl = 'https://www.alphavantage.co/';
  queryString = `function=${this.queryType}&symbol=${this.assetSymbol}`;
  url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;

  queryTypes = {
    stocks: [
      "TIME_SERIES_WEEKLY",
      "TIME_SERIES_WEEKLY_ADJUSTED",
      "TIME_SERIES_MONTHLY",
      "TIME_SERIES_MONTHLY_ADJUSTED",
    ],
    cryptocurrencies: [
      "DIGITAL_CURRENCY_WEEKLY",
      "DIGITAL_CURRENCY_MONTHLY"
    ]
  };

  setSeriesSelector(){
    if(RegExp(/DIGITAL.*WEEKLY/).test(this.queryType)){
      console.log("DIGITAL_WEEKLY", this.queryType)
      this.seriesSelector = "Time Series (Digital Currency Weekly)";
      this.refreshSelector = "6. Last Refreshed";
      this.labelSelector = "4b. close (USD)";
    }
    if(RegExp(/DIGITAL.*MONTHLY/).test(this.queryType)){
      console.log("DIGITAL_MONTHLY", this.queryType)
      this.seriesSelector = "Time Series (Digital Currency Monthly)";
      this.refreshSelector = "6. Last Refreshed";
      this.labelSelector = "4b. close (USD)";
    }
    if(RegExp(/TIME.*MONTHLY/).test(this.queryType)){
      console.log("MONTHLY", this.queryType)
      this.seriesSelector = "Monthly Time Series";
      this.refreshSelector = "3. Last Refreshed";
      this.labelSelector = "4. close";
    }
    if(RegExp(/TIME.*WEEKLY/).test(this.queryType)){
      console.log("WEEKLY", this.queryType)
      this.seriesSelector = "Weekly Time Series";
      this.refreshSelector = "3. Last Refreshed";
      this.labelSelector = "4. close";
    }
  }

  setQueryType(type){
    this.queryType = type;
    this.setSeriesSelector();
  }

  setAssetType(assetType){
    this.assetType = assetType;
  }

  setAssetSymbol(searchTerm){
    this.assetSymbol = searchTerm;
    if (this.assetType == 'stock') {
      this.queryString = `function=${this.queryType}&symbol=${this.assetSymbol}`;
    }
    if (this.assetType == 'crypto') {
      this.queryString = `function=${this.queryType}&symbol=${this.assetSymbol}&market=USD`;
    }
    this.url = `${this.baseUrl}query?${this.queryString}&apikey=${this.apiKey}`;
    console.log(this.url)
  }

  getAVData(){
    return this.http.get(this.url);
  }
}
