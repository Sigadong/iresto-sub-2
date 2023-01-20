import 'regenerator-runtime';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './globals/config';

skipWaiting();
clientsClaim();

precacheAndRoute([...self.__WB_MANIFEST,
  './images/heros/hero-image_3.webp',
  './images/heros/hero-image_3-large.webp',
  './images/heros/hero-image_3-small.webp',
  './images/placeholder.webp',
  './icons/icon-128x128.webp',
  './icons/icon-192x192.webp',
  './icons/icon-512x512.webp',
  './icons/logo/apple-touch-icon.webp',
  './icons/logo/android-chrome-192x192.webp',
  './icons/logo/android-chrome-512x512.webp',
]);

registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new CacheFirst({
    cacheName: 'iResto-images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com'
    || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'Google-fonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://use.fontawesome.com'
    || url.origin === 'https://use.fontawesome.com/b070c8f1df.css'
    || url.origin === 'https://use.fontawesome.com/b070c8f1df.js',
  new CacheFirst({
    cacheName: 'Fontawesome-icons',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 40,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

registerRoute(
  new RegExp(CONFIG.BASE_URL || CONFIG.BASE_IMAGE_URL),
  new StaleWhileRevalidate({
    cacheName: 'iResto-baseUrl',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === `${CONFIG.BASE_URL}list`
    || url.origin === `${CONFIG.BASE_URL}detail`,
  new StaleWhileRevalidate({
    cacheName: 'Api-Endpoint',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === `${CONFIG.BASE_URL}review`,
  new NetworkOnly(),
);

registerRoute(
  new RegExp('list-menu' || 'detail'),
  new CacheFirst({
    cacheName: 'iResto-Endpoint',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

console.log('Workbox loaded successfully.');
