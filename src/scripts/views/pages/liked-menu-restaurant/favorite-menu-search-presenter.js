class FavoriteMenuSearchPresenter {
  constructor({ favoriteMenus, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteMenus = favoriteMenus;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchMenus(latestQuery);
    });
  }

  async _searchMenus(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundMenus;
    if (this.latestQuery.length > 0) {
      foundMenus = await this._favoriteMenus.searchMenuRestaurant(this.latestQuery);
    } else {
      foundMenus = await this._favoriteMenus.getAllRestaurant();
    }

    this._showFoundMenus(foundMenus);
  }

  _showFoundMenus(foundMenus) {
    this._view.showFavoriteMenus(foundMenus);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMenuSearchPresenter;
