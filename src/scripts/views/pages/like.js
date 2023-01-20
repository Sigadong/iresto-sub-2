import '../components/LikeMenuComponent';
import FavoriteiRestoIdb from '../../data/favorite_iresto-idb';
import FavoriteMenuSearchView from './liked-menu-restaurant/favorite-menu-search-view';
import FavoriteMenuShowPresenter from './liked-menu-restaurant/favorite-menu-show-presenter';
import FavoriteMenuSearchPresenter from './liked-menu-restaurant/favorite-menu-search-presenter';

const view = new FavoriteMenuSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    document.querySelector('.jumbotron').style.display = 'block';

    new FavoriteMenuShowPresenter({ view, favoriteMenus: FavoriteiRestoIdb });
    new FavoriteMenuSearchPresenter({ view, favoriteMenus: FavoriteiRestoIdb });
  },

};

export default Like;
