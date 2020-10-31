import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createMenuDetailTemplate, createConsumerReviewsTemplate, createCanNotAccessedTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <h2><i class="fa fa-list-alt fa-7x" aria-hidden="true"></i> Detail Menu</h2>
        <div class="detail-menu" id="detail-menu"></div>
        <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detailMenu = await RestaurantSource.detailMenu(url.id);
        console.log(detailMenu);
        const detailMenuContainer = document.querySelector('#detail-menu');

        if (detailMenu instanceof Object || detailMenu instanceof Array) {
            detailMenuContainer.innerHTML = createMenuDetailTemplate(detailMenu);
            detailMenuContainer.innerHTML += createConsumerReviewsTemplate(detailMenu);
        } else {
            detailMenuContainer.innerHTML = createCanNotAccessedTemplate();
        }
        // document.addEventListener("DOMContentLoaded", () => {
        const buttonAddReview = document.querySelector('#buttonAdd');
        const nameConsumer = document.querySelector('#name-consumer');
        const reviewConsumer = document.querySelector('#review-consumer');
        const reviews = document.querySelector('#reviews');

        buttonAddReview.addEventListener('click', () => {
            const dataReviewConsumer = {
                id: detailMenu.id,
                name: nameConsumer.value,
                review: reviewConsumer.value,
            }
            const resultResponse = RestaurantSource.reviewMenu(dataReviewConsumer);
            if (resultResponse.error == false) {
                reviews.innerHTML += createCanNotAccessedTemplate();
            }
            console.log(resultResponse);

        });


        // const categories = detailMenu.categories;
        // const consumerReviews = detailMenu.consumerReviews;
        // const drinks = detailMenu.menus.drinks;
        // const foods = detailMenu.menus.foods;


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