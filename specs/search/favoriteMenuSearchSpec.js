import FavoriteMenuSearchPresenter from '../../src/scripts/views/pages/liked-menu-restaurant/favorite-menu-search-presenter';
import FavoriteiRestoIdb from '../../src/scripts/data/favorite_iresto-idb';
import FavoriteMenuSearchView from '../../src/scripts/views/pages/liked-menu-restaurant/favorite-menu-search-view';

describe('Searching Menu Restaurant', () => {
  let presenter;
  let favoriteMenus;
  let view;

  const searchMenus = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setMenuSearchContainer = () => {
    view = new FavoriteMenuSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteMenus = spyOnAllFunctions(FavoriteiRestoIdb);
    presenter = new FavoriteMenuSearchPresenter({
      favoriteMenus,
      view,
    });
  };

  beforeEach(() => {
    setMenuSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchMenus('menu a');

      expect(presenter.latestQuery)
        .toEqual('menu a');
    });

    it('should ask the model to search for menu restaurant', () => {
      searchMenus('menu a');

      expect(favoriteMenus.searchMenuRestaurant)
        .toHaveBeenCalledWith('menu a');
    });

    it('should show the found menu restaurant', () => {
      presenter._showFoundMenus([{ id: 1 }]);
      expect(document.querySelectorAll('.menu-title').length)
        .toEqual(1);

      presenter._showFoundMenus([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.menu-title').length)
        .toEqual(2);
    });

    it('should show the title of the found menu restaurant', () => {
      presenter._showFoundMenus([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.menu-title')
        .item(0).textContent)
        .toEqual('Satu');
    });

    it('should show - when the menu restaurant returned does not contain a title', (done) => {
      document.getElementById('card-restaurants').addEventListener('card-restaurants:updated', () => {
        const menuTitles = document.querySelectorAll('.menu-title');
        expect(menuTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteMenus.searchMenuRestaurant.withArgs('menu a').and.returnValues([
        { id: 444 },
      ]);

      searchMenus('menu a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchMenus(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMenus('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMenus('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMenus('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite menu', () => {
      searchMenus('    ');

      expect(favoriteMenus.getAllRestaurant)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite menu could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('card-restaurants').addEventListener('card-restaurants:updated', () => {
        expect(document.querySelectorAll('.alert.favorite').length).toEqual(1);

        done();
      });

      favoriteMenus.searchMenuRestaurant.withArgs('menu a').and.returnValues([]);

      searchMenus('menu a');
    });

    it('should not show any menu', (done) => {
      document.getElementById('card-restaurants').addEventListener('card-restaurants:updated', () => {
        expect(document.querySelectorAll('.cards').length)
          .toEqual(0);
        done();
      });

      favoriteMenus.searchMenuRestaurant.withArgs('menu a')
        .and.returnValues([]);

      searchMenus('menu a');
    });
  });
});
