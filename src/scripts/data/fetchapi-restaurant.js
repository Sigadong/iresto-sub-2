import CONFIG from '../globals/config';

const fetchAPI = urlApi => {
    return fetch(urlApi)
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            } else {
                return Promise.resolve(response);
            }
        })
        .then(response => response.json())
};

const fetchAPIReview = (urlApi, data) => {
    return fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': CONFIG.KEY,
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            } else {
                return Promise.resolve(response);
            }
        })
};


export { fetchAPI, fetchAPIReview };