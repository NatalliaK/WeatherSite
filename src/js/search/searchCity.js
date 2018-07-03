import changeUrl from "../utils/changeUrl";
import {eventBus} from './../index.js';

export default function searchCity() {
	document.querySelector('.search__img').addEventListener('click', setUrl);

	document.addEventListener('keypress', setUrl);
	// 	function(e) {
	// 	if (e.charCode === 13) {
	// 		e.preventDefault();
	// 		setUrl();
	// 		//document.querySelector('.search__input').value = '';
	// 	}
	// });
}


function setUrl(e) {
	if (e.which === 1 || e.charCode === 13) {
		let value = document.querySelector('.search__input').value;
		let url = `city/${value}`;
		changeUrl(url);
		document.querySelector('.search__input').value = '';
	}
}