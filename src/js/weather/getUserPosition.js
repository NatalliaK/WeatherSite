export default function getUserPosition() {
	const URL_API_USER_POSITION = 'https://api.userinfo.io/userinfos';
	return fetch(`${URL_API_USER_POSITION}`)
		.then(response => {
			return response.json();
		})
		.then(data => {
			let obj = {};
			obj.lat = data.position.latitude;
			obj.lng = data.position.longitude;
			return obj;
		})
}