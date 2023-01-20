import FavoriteiRestoIdb from '../../src/scripts/data/favorite_iresto-idb';
import * as TestFactories from '../helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Menu Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteiRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteiRestoIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the menu restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the menu restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked menu restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteiRestoIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked menu restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });
    await FavoriteiRestoIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteiRestoIdb.getAllRestaurant()).toEqual([]);
  });
});
