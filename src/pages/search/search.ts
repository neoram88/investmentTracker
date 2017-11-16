import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

import { NavController } from 'ionic-angular';
import { FundDetailsPage } from '../fund-details/fund-details'; 
import {TabsPage} from '../tabs/tabs'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [DataService]
})
export class SearchPage {

  public fundHouses;
  public fundTypes;
  public funds;
  public fundDetails;
  public selectedFundHouses;
  public selectedFundTypes;

  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ionViewDidLoad() {
    //this.getFundHouses();
    this.getFundTypes();
  }

  getFundHouses() {
    this.dataService.getFundHouses().subscribe(
      data => {
               this.fundHouses = data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundHouses completed')
    )
  }

  getFundTypes(){
    this.dataService.getFundTypes().subscribe(
      data => {
               this.fundTypes = data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundTypes completed')
    )
  }

  getFundHousesforFundType(fundType){
    this.dataService.getFundbyTypes(fundType.trim()).subscribe(
      data => {
               this.fundHouses=data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundbyTypes completed')
    )
  }

  getFundsList(fundType,fundHouse){
    this.dataService.getFundsList(fundType.trim(),fundHouse.trim()).subscribe(
      data => {
               this.funds=data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundsList completed')
    )
  }

  showfundDetails(schemeCode){
    //this.navCtrl.setRoot(FundDetailsPage);
    this.navCtrl.push(FundDetailsPage, { schemeCode: schemeCode });
  }


  // itemSelected(item,searchBy){
  //   if(searchBy=='fundtype'){
  //     this.fundDetails=this.getFundbyTypes(item);
  //   }else if(searchBy=='fundName'){
  //     this.fundDetails=this.getFundbyHouse(item);
  //   }
  // }

  delete(chip: Element) {
    chip.remove();
  }

  clearFundType(){
    this.selectedFundTypes="";
  }

}
