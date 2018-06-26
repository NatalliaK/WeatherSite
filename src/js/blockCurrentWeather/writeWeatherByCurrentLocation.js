export default function writeWeatherByCurrentLocation(data) {
	console.log(data.currently);
	let date = new Date(data.currently.time * 1000).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',
		minute: 'numeric'});
	let cloudCover = data.currently.summary;
	let icon = data.currently.icon;
	let temp = Math.round(data.currently.temperature);
	let speed = Math.round(data.currently.windSpeed);
	document.querySelector('#block-info-weather-header').insertAdjacentHTML('afterEnd', `<p><time>${date}</time></p><p>${cloudCover}</p><p><span class="block-info__img-show-weather block-info__img-show-weather--${icon}"></span><span>${temp}&#176;C</span></p><p>Скорость ветра: ${speed} м/с</p>`);
}