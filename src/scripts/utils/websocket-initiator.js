import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        console.log(message.data);
        const menuItem = JSON.parse(message.data);


        NotificationHelper.sendNotification({
            title: `${menuItem.title} is on movie!`,
            options: {
                body: menuItem.overview,
                image: `https://image.tmdb.org/t/p/w500/${menuItem.poster_path}`,
                vibrate: [200, 70, 300, 150],
                data: {
                    dateOfArrival: Date.now(),
                },
            },
        });
    },
};

export default WebSocketInitiator;