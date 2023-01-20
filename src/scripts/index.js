import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/components/FooterComponent';
import '../styles/style.css';
import App from './views/app';
import serviceWorkerRegister from './utils/sw-register';
import CONFIG from './globals/config';
import WebSocketInitiator from './utils/websocket-initiator';

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
