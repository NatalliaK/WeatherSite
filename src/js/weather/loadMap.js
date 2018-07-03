import {eventBus} from './../index.js';

export default function loadMap(id, position) {

	let lat = position.lat;
	let lng = position.lng;
	var myMap;

	if (document.querySelector('#map') && window.location.hash.match(/city/)) {
		document.querySelector('#map').innerHTML = '';
	}

	if (!document.querySelector('#map').childNodes.length) {
		ymaps.ready(init);
	}

	function init() {
		//eventBus.on('setMapCenter', setCenter);

		myMap = new ymaps.Map(id, {
			center: [lat, lng],
			zoom: 7,
			controls: ['zoomControl']
		});

		myMap.events.add('actionend', getNewCenter);


		function getNewCenter() {
				let newCenter = myMap.getCenter();
				var url = `center=${newCenter[0]},${newCenter[1]}`;
				eventBus.trigger('changeUrl', url);
		}

		function getNewCenterCity ([lat, lng]) {
			myMap.getCenter([lat, lng]);
		}
		//eventBus.on('getNewCenterCity', getNewCenterCity);
	}
}

function setTypeAndPan () {
	myMap
		// Плавное перемещение центра карты в точку с новыми координатами.
		.panTo([62.915, 34.461], {
			// Задержка перед началом перемещения.
			delay: 1500
		});
}
