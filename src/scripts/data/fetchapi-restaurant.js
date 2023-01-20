import CONFIG from '../globals/config';

const fetchAPI = (urlApi) => fetch(urlApi)
  .then((response) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response.status !== 200) {
        reject(new Error(response.statusText));
      } else {
        resolve(response);
      }
    }, 200);
  }))
  .then((response) => response.json());

const fetchAPIReview = (urlApi, dataReview) => fetch(urlApi, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': CONFIG.KEY,
  },
  body: JSON.stringify(dataReview),
})
  .then((response) => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  })
  .then((response) => response.json());

export { fetchAPI, fetchAPIReview };
