import { Component, OnInit } from '@angular/core';
import { AlphaVantageDataService } from '../alpha-vantage-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  data;
  constructor(private _data:AlphaVantageDataService) { }
  
  getData(){
    this.data = this._data.getAlphaVantageData();
    console.log(this.data);
  }
    
  ngOnInit() {
    this.data = this._data.getAlphaVantageData()
      .subscribe( datum => console.log(datum) );
    
  }

}
