import { Component, OnInit } from '@angular/core';

import { AlphaVantageDataService } from '../services/alpha-vantage-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private _service:AlphaVantageDataService) { }
  
  apiDataMonthly: any;
  allDataMonthly: any = [];
  allDataMonthlyLabels: any = [];
  
  ngOnInit() {
    
    this._service.getAVData().subscribe( (res:any) => {
      this.apiDataMonthly = res["Monthly Adjusted Time Series"];
      
      console.log(this.apiDataMonthly);
      Object.keys(this.apiDataMonthly).map( key => {
        // console.log(`key: ${k} value: ${this.dataMonthly[k]["4. close"]}`);
        let dataPoint: number = this.apiDataMonthly[key]["4. close"]
        this.allDataMonthly.push(dataPoint);
        this.allDataMonthlyLabels.push(key);
  
      });
      this.allDataMonthly.reverse();
      this.allDataMonthlyLabels.reverse();
      this.lineChartData = [{data:this.allDataMonthly, label: "Closing"}];
      console.log(this.lineChartData);
      console.log(this.allDataMonthlyLabels);
      
      // LOOKS LIKE IT SHOULD WORK BUT DOESN'T...WHY?
      // for(let dayData of res["Monthly Adjusted Time Series"]) {
      //   console.log(res["Monthly Adjusted Time Series"][dayData]["4. close"]);
      // }
      
      // THIS WORKS
      // Object.entries(this.apiDataMonthly).forEach(
      //   ([key, value]) => console.log(key, value)
      // );
      
    })
    
  }
  
  public lineChartData:Array<any> = [
    {data:this.allDataMonthly, label: "Closing"}
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



    // import { Component } from '@angular/core';
     
    // @Component({
    //   selector: 'app-dashboard',
    //   templateUrl: './dashboard.component.html'
    // })
    // export class DashboardComponent {
    //   // lineChart
    //   public lineChartData:Array<any> = [
    //     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    //     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    //     {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    //   ];
    //   public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    //   public lineChartOptions:any = {
    //     responsive: true
    //   };
    //   public lineChartColors:Array<any> = [
    //     { // grey
    //       backgroundColor: 'rgba(148,159,177,0.2)',
    //       borderColor: 'rgba(148,159,177,1)',
    //       pointBackgroundColor: 'rgba(148,159,177,1)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     },
    //     { // dark grey
    //       backgroundColor: 'rgba(77,83,96,0.2)',
    //       borderColor: 'rgba(77,83,96,1)',
    //       pointBackgroundColor: 'rgba(77,83,96,1)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgba(77,83,96,1)'
    //     },
    //     { // grey
    //       backgroundColor: 'rgba(148,159,177,0.2)',
    //       borderColor: 'rgba(148,159,177,1)',
    //       pointBackgroundColor: 'rgba(148,159,177,1)',
    //       pointBorderColor: '#fff',
    //       pointHoverBackgroundColor: '#fff',
    //       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     }
    //   ];
    //   public lineChartLegend:boolean = true;
    //   public lineChartType:string = 'line';
     
    //   public randomize():void {
    //     let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    //     for (let i = 0; i < this.lineChartData.length; i++) {
    //       _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    //       for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //         _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //       }
    //     }
    //     this.lineChartData = _lineChartData;
    //   }
     
    //   // events
    //   public chartClicked(e:any):void {
    //     console.log(e);
    //   }
     
    //   public chartHovered(e:any):void {
    //     console.log(e);
    //   }
    // }