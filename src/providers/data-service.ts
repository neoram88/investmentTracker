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
    headers.append("X-Mashape-Key", "h2vhUH1P7nmshA652c2fDKq9O4Svp1BroDQjsn0KvqaLt0wnIC");
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

}
