import { createListItemTemplate, createFavoriteMenuNotAvailableTemplate } from '../../templates/template-creator';
import '../../components/LikeMenuComponent';

class FavoriteMenuSearchView {
  getTemplate() {
    return `<like-menu></like-menu>`;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });

    document.getElementById('searchButton').addEventListener('click', () => {
      const query = document.getElementById('query');
      callback(query.target.value);
    });
  }

  showMenus(menuRestaurant) {
    this.showFavoriteMenus(menuRestaurant);
  }

  showFavoriteMenus(menuRestaurant = []) {
    let listItemTemplate;
    if (menuRestaurant.length > 0) {
      listItemTemplate = menuRestaurant.reduce((carry, listItem) => carry.concat(createListItemTemplate(listItem)), '');
    } else {
      listItemTemplate = this._getFavoriteMenuNotAvailableTemplate();
    }

    document.getElementById('card-restaurants').innerHTML = listItemTemplate;

    document.getElementById('card-restaurants').dispatchEvent(new Event('card-restaurants:updated'));
  }

  _getFavoriteMenuNotAvailableTemplate() {
    return createFavoriteMenuNotAvailableTemplate();
  }
}

export default FavoriteMenuSearchView;
