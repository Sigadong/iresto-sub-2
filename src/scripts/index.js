import 'regenerator-runtime';
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
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});









