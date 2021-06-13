import CONFIG from '../globals/config';

const fetchAPI = urlApi => {
    return fetch(urlApi)
        .then(response => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (response.status !== 200) {
                        reject(new Error(response.statusText));
                    } else {
                        resolve(response);
                    }
                }, 450)
            })
        })
        .then(response => response.json())
};

const fetchAPIReview = (urlApi, dataReview) => {
    return fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': CONFIG.KEY,
        },
        body: JSON.stringify(dataReview),
    })
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            } else {
                return Promise.resolve(response);
            }
        })
        .then(response => response.json())
};


export { fetchAPI, fetchAPIReview };