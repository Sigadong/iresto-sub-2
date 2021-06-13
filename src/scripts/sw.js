import 'regenerator-runtime';
import CONFIG from './globals/config';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    new CacheFirst({
        cacheName: 'iResto-images',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
        url.origin === 'https://fonts.gstatic.com',
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
    ({ url }) => url.origin === 'https://use.fontawesome.com' ||
        url.origin === 'https://use.fontawesome.com/b070c8f1df.js',
    new CacheFirst({
        cacheName: 'Fontawesome-icons',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => url.origin === CONFIG.BASE_URL + 'review',
    new NetworkFirst()
);

registerRoute(
    ({ url }) => url.origin === CONFIG.BASE_URL + 'list' ||
        url.origin === CONFIG.BASE_URL + 'detail',
    new StaleWhileRevalidate({
        cacheName: 'Api-Endpoint',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ]
    })
);

registerRoute(
    new RegExp('list-menu' || 'detail'),
    new CacheFirst({
        cacheName: 'iResto-Endpoint',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ]
    })
);

registerRoute(
    new RegExp(CONFIG.BASE_URL || CONFIG.BASE_IMAGE_URL),
    new StaleWhileRevalidate({
        cacheName: 'iResto-baseUrl',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ]
    })
);

console.log('Workbox loaded successfully.');