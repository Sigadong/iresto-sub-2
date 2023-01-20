import { itActsAsFavoriteMenuRestaurantModel } from './contract/favoriteMenuRestaurantContract';

let favoriteMenuRestaurants = [];

const favoriteMenuRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteMenuRestaurants.find((menuRestaurant) => menuRestaurant.id == id);
  },

  getAllRestaurant() {
    return favoriteMenuRestaurants;
  },

  putRestaurant(menuRestaurant) {
    if (!menuRestaurant.hasOwnProperty('id')) {
      return;
    }
    if (this.getRestaurant(menuRestaurant.id)) {
      return;
    }
    favoriteMenuRestaurants.push(menuRestaurant);
  },

  deleteRestaurant(id) {
    favoriteMenuRestaurants = favoriteMenuRestaurants.filter((menuRestaurant) => menuRestaurant.id != id);
  },
};

describe('Favorite Menu Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteMenuRestaurants = []);

  itActsAsFavoriteMenuRestaurantModel(favoriteMenuRestaurantArray);
})