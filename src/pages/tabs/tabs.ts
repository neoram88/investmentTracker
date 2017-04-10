import { Component } from '@angular/core';

import { PortfolioPage } from '../portfolio/portfolio';
import { SearchPage } from '../search/search';
import { WatchlistPage } from '../watchlist/watchlist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PortfolioPage;
  tab2Root: any = WatchlistPage;
  tab3Root: any = SearchPage;

  constructor() {

  }
}
