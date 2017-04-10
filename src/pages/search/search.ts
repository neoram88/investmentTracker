import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [DataService]
})
export class SearchPage {

  public fundHouses;
  public fundTypes;
  public items;
  public fundDetails;
  public selectedFundHouses;
  public selectedFundTypes;

  constructor(public navCtrl: NavController, private dataService: DataService,) {

  }

  ionViewDidLoad() {
    this.getFundHouses();
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
    this.dataService.getFundbyTypes(fundType).subscribe(
      data => {
               this.fundHouses=data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundbyTypes completed')
    )
  }

  getFundbyHouse(fundHouse){
    this.dataService.getFundbyTypes(fundHouse).subscribe(
      data => {
               this.items=data.json().data;
           },
           err => console.error(err),
           () => console.log('getFundbyNames completed')
    )
  }

  loadSearchData(searchBy){
    if(searchBy=='fundtype'){
      this.items=this.fundTypes;
    }else if(searchBy=='fundhouse'){
      this.items=this.fundHouses;
    }
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
