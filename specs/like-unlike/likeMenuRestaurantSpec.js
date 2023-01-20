import FavoriteiRestoIdb from '../../src/scripts/data/favorite_iresto-idb';
import * as TestFactories from '../helpers/testFactories';

describe('Liking A Menu Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the menu restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the menu restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the menu restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const detailMenu = await FavoriteiRestoIdb.getRestaurant(1);
    expect(detailMenu).toEqual({ id: 1 });

    FavoriteiRestoIdb.deleteRestaurant(1);
  });

  it('should not add a menu restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({ id: 1 });
    await FavoriteiRestoIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteiRestoIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteiRestoIdb.deleteRestaurant(1);
  });

  it('should not add a menu restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMenuRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteiRestoIdb.getAllRestaurant()).toEqual([]);
  });
});