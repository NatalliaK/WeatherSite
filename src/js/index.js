import EventBus from './utils/EventBus.js';
import Router from './utils/router.js';
import drawPageWeather from './weather/drawPageWeather.js';
import getForecastByLatLng from './weather/getForecastByLatLng.js';
import drawPageAuthor from './author/author.js';
import drawPageAbout from './about/about.js';
import getUserPosition from './weather/getUserPosition.js';
import writeWeatherByCurrentLocation from './blockCurrentWeather/writeWeatherByCurrentLocation.js';
import writeWeatherByHistory from './history/writeWeatherByHistory.js';

const main = document.querySelector('#main');
export const eventBus = new EventBus();

eventBus.on('author', drawPageAuthor);
eventBus.on('about', drawPageAbout);
eventBus.on('init', drawPageWeather);
eventBus.on('getForecast', getForecastByLatLng);
eventBus.on('currentWeather', writeWeatherByCurrentLocation);
eventBus.on('historyWeather', writeWeatherByHistory);

var router = new Router({
	routes: [{
		name: 'index',
		match: '',
		onEnter: () => {
			eventBus.trigger('init', main);
			getUserPosition()
				.then(data => {
					let lat = data.lat;
					let lng = data.lng;
					window.location.hash = `center=${lat},${lng}`;
				});
		},
		leave: () => {

		}
	},
		{
			name: 'weather',
			match: /center=\d+\.*\d*,\d+\.*\d*/,
			onEnter: () => {
				let url = window.location.hash.replace('#', '');
				let location = url.match(/\d+\.*\d*/g);
				let lat = +location[0];
				let lng = +location[1];

				if (!document.querySelector('.weather')) {
					eventBus.trigger('init', main);
				}
				eventBus.trigger('getForecast', {lat: lat, lng: lng});
			},
			leave: () => {

			}
		},

		{
			name: 'about',
			match: 'about',
			onEnter: () => {
				eventBus.trigger('about', main);
			},
			leave: () => {

			}
		},
		{
			name: 'author',
			match: 'author',
			onEnter: () => {
				eventBus.trigger('author', main);
				console.log(eventBus);
			},
			leave: () => {

			}
		}
	]
	});