import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

@Component({
  selector: 'page-fund-details',
  templateUrl: 'fund-details.html',
  providers: [DataService]
})
export class FundDetailsPage {

  public schemeCode;
  public funds;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
    this.funds=[];
    
    this.schemeCode=this.navParams.get('schemeCode');

    this.dataService.getFundDetails(this.schemeCode).subscribe(
      data => {
               this.funds=data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundsList completed')
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundDetailsPage');
  }


}
