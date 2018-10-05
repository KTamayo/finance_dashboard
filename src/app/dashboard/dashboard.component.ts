import { Component, OnInit } from '@angular/core';

import { AlphaVantageDataService } from '../services/alpha-vantage-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private _service:AlphaVantageDataService) { }

  searchTerm:string;
  selectedQueryType:string;
  currentSymbol:string;
  isLoadingData;
  apiDataMonthly:any;
  allDataMonthly:Array<any>;
  allDataMonthlyLabels:Array<any>;

  ngOnInit() {
    this.currentSymbol = this._service.stockSymbol;
    this.getData();
  }

  getData() {
    this.isLoadingData = true;
    this.allDataMonthly =  [];
    this.allDataMonthlyLabels = [];
    this.lineChartData = [];

    this._service.getAVData().subscribe( (res:any) => {

      Object.keys(res["Monthly Time Series"]).map( key => {
        let dataPoint: number = res["Monthly Time Series"][key]["4. close"]
        this.allDataMonthly.push(dataPoint);
        this.allDataMonthlyLabels.push(key);
      });

      this.allDataMonthly.reverse();
      this.allDataMonthlyLabels.reverse();
      this.lineChartData = [{data:this.allDataMonthly, label: "Closing"}];
      this.lineChartLabels = this.allDataMonthlyLabels;
      this.isLoadingData = false;
    }, err => {console.log(err)})
  }

  onSearchTerm(){
    this.currentSymbol = this.searchTerm;
    this._service.setStockSymbol(this.searchTerm);
    this.getData();
    this.searchTerm = '';
  }

  public lineChartData:Array<any> = [
    {data:[5,10,27,4,8,35], label: "Closing"}
  ];
  public lineChartLabels:Array<any> = this.allDataMonthlyLabels;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

}
