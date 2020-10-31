import ListMenu from '../views/pages/list-menu';
import Like from '../views/pages/like';
import Detail from '../views/pages/detail';

const routes = {
    '/': ListMenu, // default page
    '/list-menu': ListMenu,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;