const backgroundContainer = document.querySelector('.background-container')

const weatherCity = document.querySelector('.city')
const weatherCountry = document.querySelector('.country')
const weatherTemperature = document.querySelector('.temp')
const weatherCondition = document.querySelector('.condition')
const weatherHumidity = document.querySelector('.humidity')
const weatherWind = document.querySelector('.wind')

const weatherDateTimeLocation = document.querySelector('.date-time-location')
const dateOptions = {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
}



function fetchWeather(location) {
	fetch(`https://api.weatherapi.com/v1/current.json?key=63a336c4cf1f4657ba494752220203&q=${location}`)
		.then(function (response) {
			console.log('success')
			return response.json()
		})
		.then(function (response) {
			console.log(response)
			weatherTemperature.textContent = 'Temperature : ' + response.current.temp_c + '°C'
			weatherCondition.textContent = response.current.condition.text
			const weatherCode = response.current.condition.code
			switch (weatherCode) {
				case 1000:
					backgroundContainer.style.background = 'url("./images/clear.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1003:
					backgroundContainer.style.background = 'url("./images/partly-cloudy.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1006:
					backgroundContainer.style.background = 'url("./images/cloudy.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1009:
					backgroundContainer.style.background = 'url("./images/overcast.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1030:
					backgroundContainer.style.background = 'url("./images/fog.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1117:
					backgroundContainer.style.background = 'url("./images/blizzard.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1135:
					backgroundContainer.style.background = 'url("./images/fog.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1147:
					backgroundContainer.style.background = 'url("./images/fog.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1186:
					backgroundContainer.style.background = 'url("./images/moderate-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1189:
					backgroundContainer.style.background = 'url("./images/moderate-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1192:
					backgroundContainer.style.background = 'url("./images/heavy-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1195:
					backgroundContainer.style.background = 'url("./images/heavy-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1210:
					backgroundContainer.style.background = 'url("./images/light-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1213:
					backgroundContainer.style.background = 'url("./images/light-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1216:
					backgroundContainer.style.background = 'url("./images/moderate-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1219:
					backgroundContainer.style.background = 'url("./images/moderate-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1222:
					backgroundContainer.style.background = 'url("./images/heavy-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1225:
					backgroundContainer.style.background = 'url("./images/heavy-snow.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1243:
					backgroundContainer.style.background = 'url("./images/heavy-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
				case 1246:
					backgroundContainer.style.background = 'url("./images/heavy-rain.jpg") no-repeat center'
					backgroundContainer.style.backgroundSize = 'cover'
					break;
			};
			weatherHumidity.textContent = 'Humidity : ' + response.current.humidity + '%'
			weatherWind.textContent = 'Wind Speed : ' + response.current.wind_kph + 'km/h'
			weatherDateTimeLocation.textContent = `${new Date().toLocaleString('en-GB', dateOptions)}, ${response.location.name}`

		});
}

fetchWeather('Nantes')

let queryLocation = document.getElementById('query-location')
console.log(queryLocation.value)
let buttonSearchCity = document.querySelector('.button-search-city')
buttonSearchCity.addEventListener("click", () => fetchWeather(queryLocation.value))



