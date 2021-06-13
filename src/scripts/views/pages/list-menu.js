import RestaurantSource from '../../data/restaurant-source';
import { createListItemTemplate, createCanNotAccessedTemplate, createIndicatorLoadingTemplate } from '../templates/template-creator';

const ListMenu = {
    async render() {
        return `
        <h2><i class="fa fa-list-alt fa-lg" aria-hidden="true"></i> Explore Restaurant</h2>
        <div class="container-cards" id="card-restaurants"></div>
      `;
    },

    async afterRender() {
        const listItemContainer = document.querySelector('#card-restaurants');
        listItemContainer.innerHTML = createIndicatorLoadingTemplate();

        const listItem = await RestaurantSource.listMenu();

        if (listItem instanceof Array) {
            listItemContainer.innerHTML = '';
            listItem.forEach((item) => {
                listItemContainer.innerHTML += createListItemTemplate(item);
            });
        } else {
            listItemContainer.innerHTML = createCanNotAccessedTemplate();
        }

    },
};

export default ListMenu;