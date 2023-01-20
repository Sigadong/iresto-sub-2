import '../components/DetailMenuComponent';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteiRestoIdb from '../../data/favorite_iresto-idb';
import {
  createMenuDetailTemplate, createCustomerReviewsTemplate,
  createCanNotAccessedTemplate, createIndicatorLoadingTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `<detail-menu></detail-menu>`;
  },

  async afterRender() {
    document.querySelector('.jumbotron').style.display = 'none';

    const detailMenuContainer = document.querySelector('#detail-menu');
    detailMenuContainer.innerHTML = createIndicatorLoadingTemplate();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailMenu = await RestaurantSource.detailMenu(url.id);
    detailMenuContainer.innerHTML = '';

    if (Object.keys(detailMenu).length > 0) {
      detailMenuContainer.innerHTML = createMenuDetailTemplate(detailMenu);
      detailMenuContainer.innerHTML += createCustomerReviewsTemplate(detailMenu);
    } else {
      detailMenuContainer.innerHTML += createCanNotAccessedTemplate();
    }

    const buttonAddReview = document.querySelector('#buttonAdd');
    const nameCustomer = document.querySelector('#name-customer');
    const reviewCustomer = document.querySelector('#review-customer');

    buttonAddReview.addEventListener('click', async () => {
      const dataReviewCustomer = {
        id: detailMenu.id,
        name: nameCustomer.value,
        review: reviewCustomer.value,
      };
      const customerReviews = await RestaurantSource.reviewMenu(dataReviewCustomer);

      if (Object.keys(customerReviews).length > 0) {
        detailMenuContainer.innerHTML = createMenuDetailTemplate(detailMenu);
        detailMenuContainer.innerHTML += createCustomerReviewsTemplate(customerReviews);
        nameCustomer.value = '';
        reviewCustomer.value = '';
      } else {
        detailMenuContainer.innerHTML = createCanNotAccessedTemplate();
      }
    });

    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurant: FavoriteiRestoIdb,
      detailMenu: {
        id: detailMenu.id,
        pictureId: detailMenu.pictureId,
        city: detailMenu.city,
        rating: detailMenu.rating,
        name: detailMenu.name,
        description: detailMenu.description,
        address: detailMenu.address,
        categories: detailMenu.categories,
        consumerReviews: detailMenu.consumerReviews,
        menus: {
          drinks: detailMenu.menus.drinks,
          foods: detailMenu.menus.foods,
        },
      },
    });
  },
};

export default Detail;
