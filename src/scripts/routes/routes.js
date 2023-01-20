import ListMenu from '../views/pages/list-menu';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListMenu,
  '/restaurants': ListMenu,
  '/detail/:id': Detail,
  '/favorites': Like,
};

export default routes;
