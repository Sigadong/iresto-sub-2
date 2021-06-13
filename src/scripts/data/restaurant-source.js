import API_ENDPOINT from '../globals/api-endpoint';
import { fetchAPI, fetchAPIReview } from './fetchapi-restaurant';

class RestaurantSource {
    static async listMenu() {
        try {
            const responseJson = await fetchAPI(API_ENDPOINT.LIST_MENU);
            return responseJson.restaurants;
        } catch (error) {
            return error;
        }
    }

    static async detailMenu(id) {
        try {
            const responseJson = await fetchAPI(API_ENDPOINT.DETAIL(id));
            return responseJson.restaurant;
        } catch (error) {
            return error;
        }
    }

    static async reviewMenu(reviewConsumer) {
        try {
            const response = await fetchAPIReview(API_ENDPOINT.REVIEW_MENU, reviewConsumer);
            return response;
        } catch (error) {
            return error;
        }
    }

}

export default RestaurantSource;