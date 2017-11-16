import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PortfolioData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Hello PortfolioData Provider');
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append("X-Mashape-Key", "2WtgNSU4LAmshsC4BJ4KPdajsgH7p1P2L33jsngUvKHQmjJFaP");
  }

  getFundHouses() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let fundHouses = this.http.get(`https://mitanjos-india-mutual-fund-nav-prices-v1.p.mashape.com/list/fundHouses`,{
          headers: headers
        });
        return fundHouses;
  }

  getFundTypes() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let fund= this.http.get(`https://mitanjos-india-mutual-fund-nav-prices-v1.p.mashape.com/list/fundTypes`,{
          headers: headers
        });
        return fund;
  }

  getFundbyTypes(fundType) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let fund= this.http.get(`https://mitanjos-india-mutual-fund-nav-prices-v1.p.mashape.com/list/fundHouses/fundType/${fundType}`,{
          headers: headers
        });
        return fund;
  }

  getFundsList(fundType,fundHouse) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let fund= this.http.get(`https://mitanjos-india-mutual-fund-nav-prices-v1.p.mashape.com/list/funds/fundHouse/${fundHouse}/fundType/${fundType}`,{
          headers: headers
        });
        return fund;
  }

  getFundDetails(schemeCode) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let fund= this.http.get(`https://mitanjos-india-mutual-fund-nav-prices-v1.p.mashape.com/quote/schemeCode/${schemeCode}`,{
          headers: headers
        });
        return fund;
  }

}
