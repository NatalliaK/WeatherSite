export default function drawPageWeather(htmlEl) {
	htmlEl.innerHTML = '<div class="weather"><div class="weather__header"><div class="weather__settings"><label><input type="radio" name="queries" value="xhr"><span>XHR</span></label><label><input type="radio" name="queries" value="fetch" checked><span>fetch</span></label></div><div class="weather__search-wrap"><input class="weather__search" type="search"><?xml version="1.0" encoding="iso-8859-1"?>\n' +
		'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
		'<svg class="weather__img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
		'\t width="15px" height="15px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;"\n' +
		'\t xml:space="preserve">\n' +
		'<g>\n' +
		'\t<g>\n' +
		'\t\t<path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951\n' +
		'\t\t\tC282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46\n' +
		'\t\t\tc0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465\n' +
		'\t\t\tC318.424,257.208,257.206,318.416,181.956,318.416z"/>\n' +
		'\t\t<path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324\n' +
		'\t\t\tc17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>\n' +
		'\t</g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'<g>\n' +
		'</g>\n' +
		'</svg></div></div>' +
		'<div class="weather__map" id="map"></div>' +
		'<section id="history" class="block-info"><h2>История</h2></section><section id="weather" class="block-info"><h2 id="block-info-weather-header">Погода</h2></section><section id="favorites" class="block-info"><h2>Избранное</h2></section>' +
		'</div>';
}