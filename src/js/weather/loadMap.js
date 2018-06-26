export default function loadMap(id, position) {
	let lat = position.lat;
	let lng = position.lng;
	ymaps.ready(init);
	var myMap;

	function init(){
		myMap = new ymaps.Map (id, {
			center: [lat, lng],
			zoom: 7,
			controls: ['zoomControl']
		});
	}
}

function setCenter () {
	myMap.setCenter([57.767265, 40.925358]);
}

function setTypeAndPan () {
	myMap
		// Плавное перемещение центра карты в точку с новыми координатами.
		.panTo([62.915, 34.461], {
			// Задержка перед началом перемещения.
			delay: 1500
		});
}
