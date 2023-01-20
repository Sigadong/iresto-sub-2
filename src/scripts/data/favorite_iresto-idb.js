import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteiRestoIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant(menuRestaurant) {
    if (!menuRestaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, menuRestaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async searchMenuRestaurant(query) {
    return (await this.getAllRestaurant()).filter((listItem) => {
      const loweredCaseMenuTitle = (listItem.name || '-').toLowerCase();
      const jammedMenuTitle = loweredCaseMenuTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedMenuTitle.indexOf(jammedQuery) !== -1;
    });
  },

};

export default FavoriteiRestoIdb;
