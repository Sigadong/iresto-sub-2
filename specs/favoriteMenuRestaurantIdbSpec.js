import { itActsAsFavoriteMenuRestaurantModel } from './contract/favoriteMenuRestaurantContract';
import FavoriteiRestoIdb from '../src/scripts/data/favorite_iresto-idb';

describe('Favorite iResto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteiRestoIdb.getAllRestaurant()).forEach(async (menuRestaurant) => {
      await FavoriteiRestoIdb.deleteRestaurant(menuRestaurant.id);
    });
  });

  itActsAsFavoriteMenuRestaurantModel(FavoriteiRestoIdb);
});