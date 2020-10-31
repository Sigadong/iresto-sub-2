import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
    static async listMenu() {
        const response = await fetch(API_ENDPOINT.LIST_MENU);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailMenu(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async reviewMenu(reviewConsumer) {
        const response = await fetch(API_ENDPOINT.REVIEW_MENU, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.KEY,
            },
            body: JSON.stringify(reviewConsumer),
        });
        return response;
    }

}

export default RestaurantSource;