import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
    createMenuDetailTemplate, createCustomerReviewsTemplate,
    createCanNotAccessedTemplate, createIndicatorLoadingTemplate,
} from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <h2><i class="fa fa-list-alt fa-7x" aria-hidden="true"></i> Detail Menu</h2>
        <div class="detail-menu" id="detail-menu"></div>
        <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const detailMenuContainer = document.querySelector('#detail-menu');
        detailMenuContainer.innerHTML += createIndicatorLoadingTemplate();

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detailMenu = await RestaurantSource.detailMenu(url.id);

        if (detailMenu instanceof Object) {
            detailMenuContainer.innerHTML = '';
            detailMenuContainer.innerHTML = createMenuDetailTemplate(detailMenu);
            detailMenuContainer.innerHTML += createCustomerReviewsTemplate(detailMenu);
        } else {
            detailMenuContainer.innerHTML = createCanNotAccessedTemplate();
        }

        const buttonAddReview = document.querySelector('#buttonAdd');
        const nameCustomer = document.querySelector('#name-customer');
        const reviewCustomer = document.querySelector('#review-customer');

        buttonAddReview.addEventListener('click', async () => {
            const dataReviewCustomer = {
                id: detailMenu.id,
                name: nameCustomer.value,
                review: reviewCustomer.value,
            }
            const customerReviews = await RestaurantSource.reviewMenu(dataReviewCustomer);

            if (customerReviews instanceof Object) {
                detailMenuContainer.innerHTML = createMenuDetailTemplate(detailMenu);
                detailMenuContainer.innerHTML += createCustomerReviewsTemplate(customerReviews);
                nameCustomer.value = '';
                reviewCustomer.value = '';
            } else {
                detailMenuContainer.innerHTML = '';
                detailMenuContainer.innerHTML += createCanNotAccessedTemplate();
            }
        });

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
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
                }
            },
        });

    },
};

export default Detail;