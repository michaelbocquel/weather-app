const weatherLocation = document.querySelector('.location')
const weatherTime = document.querySelector('.time')
const weatherTemperature = document.querySelector('.temp')
const weatherWind = document.querySelector('.wind')
const weatherHumidity = document.querySelector('.humidity')

fetch('https://api.weatherapi.com/v1/current.json?key=63a336c4cf1f4657ba494752220203&q=montaigu')
	.then(function (response) {
		console.log('success')
		return response.json()
	})
	.then(function (response) {
		console.log(response)
		weatherLocation.textContent = response.location.name + ', ' + response.location.country
		weatherTime.textContent = response.location.localtime
		weatherTemperature.textContent = 'Temperature : ' + response.current.temp_c + '°C'
		weatherWind.textContent = response.current.wind_kph + ', ' + response.current.wind_dir
		weatherHumidity.textContent = 'Humidity : ' + response.current.humidity + '%'
	});