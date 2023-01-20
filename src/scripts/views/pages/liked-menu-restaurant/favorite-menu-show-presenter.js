class FavoriteMenuShowPresenter {
  constructor({ view, favoriteMenus }) {
    this._view = view;
    this._favoriteMenus = favoriteMenus;

    this._showFavoriteMenus();
  }

  async _showFavoriteMenus() {
    const menuRestaurant = await this._favoriteMenus.getAllRestaurant();
    this._displayMenus(menuRestaurant);
  }

  _displayMenus(menuRestaurant) {
    this._view.showFavoriteMenus(menuRestaurant);
  }
}

export default FavoriteMenuShowPresenter;
