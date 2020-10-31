import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import App from './views/app';
import serviceWorkerRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('nav ul'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    serviceWorkerRegister();
    // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});



// const hamburger = document.querySelector('#hamburger');
// const navUl = document.querySelector('nav ul');
// const body = document.querySelector('body');

// // HamburgerMenu
// hamburger.addEventListener('click', event => {
//     navUl.classList.toggle('slide');
//     event.stopPropagation();
// });

// body.addEventListener('click', event => {
//     navUl.classList.remove('slide');
//     event.stopPropagation();
// })

// // MenuRestaurant
// const cardRestaurants = document.querySelector('#card-restaurants');
// cardRestaurants.innerHTML = '';

// data.restaurants.forEach(restaurant => {
//     cardRestaurants.innerHTML += `
//     <article class="cards">
//     <p class="city">${restaurant.city}</p>
//     <img class="thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
//     <div class="item">
//             <p class="rating">Rating: <span>${restaurant.rating}</span> | Reviews: <span>${restaurant.reviews}</span></p>
//             <p class="booked">Booked ${restaurant.booked} times today.</p>
//             <h3><a href="#">${restaurant.name}</a></h3>
//             <p class="description">${restaurant.description}</p>
//         </div>
//     </article>
//     `
// });













