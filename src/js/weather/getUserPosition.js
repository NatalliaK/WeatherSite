export default function getUserPosition() {
  const URL_API_USER_POSITION = 'http://ip-api.com/json';
  return fetch(`${URL_API_USER_POSITION}`)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      let url = `center=${data.lat},${data.lon}`;
      return url;
    })
    .catch(err => {
      console.log('Определить координаты пользователя не удалось', err);
      let url = `center=55,30`;
      return url; //дефолтное значение, если не ответа от API
    });
}
