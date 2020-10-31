import RestaurantSource from '../../data/restaurant-source';
import { createListItemTemplate, createCanNotAccessedTemplate } from '../templates/template-creator';

const ListMenu = {
    async render() {
        return `
        <h2><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i> Explore Restaurant</h2>
        <div class="container-cards" id="card-restaurants"></div>
      `;
    },

    async afterRender() {
        const listItem = await RestaurantSource.listMenu();
        console.log(listItem);
        const listItemContainer = document.querySelector('#card-restaurants');

        if (listItem instanceof Array) {
            listItem.forEach((item) => {
                listItemContainer.innerHTML += createListItemTemplate(item);
            });
        } else {
            listItemContainer.innerHTML += createCanNotAccessedTemplate();
        }

    },
};

export default ListMenu;