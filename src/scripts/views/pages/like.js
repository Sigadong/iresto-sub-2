import FavoriteiRestoIdb from '../../data/favorite_iresto-idb';
import { createListItemTemplate, createEmptyFavoriteTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
        <h2><i class="fa fa-heart-o fa-lg" aria-hidden="true"></i> Favorite Menu</h2>
        <div class="container-cards" id="card-restaurants"></div>
      `;
    },

    async afterRender() {
        const favoriteItems = await FavoriteiRestoIdb.getAllRestaurant();
        const favoriteItemContainer = document.querySelector('#card-restaurants');
        if (favoriteItems < 1 || favoriteItems == null) {
            favoriteItemContainer.innerHTML += createEmptyFavoriteTemplate();
        } else {
            favoriteItems.forEach((item) => {
                favoriteItemContainer.innerHTML += createListItemTemplate(item);
            });
        }
    },
};

export default Like;