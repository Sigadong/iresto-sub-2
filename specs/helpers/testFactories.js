import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteiRestoIdb from '../../src/scripts/data/favorite_iresto-idb';

const createLikeButtonPresenterWithMenuRestaurant = async (detailMenu) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteiRestoIdb,
    detailMenu,
  });
};

export { createLikeButtonPresenterWithMenuRestaurant };