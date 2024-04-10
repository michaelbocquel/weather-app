const backgroundContainer = document.querySelector(".background-container");

/* ══­­­══­­­══­­­══­­­══­­­   SEARCH BAR   ══­­­══­­­══­­­══­­­═══ */

// GET ELEMENTS TO PERFORM CITY SEARCHES
let searchQuery = document.querySelector(".search-query");
let searchButton = document.querySelector(".search-button");

// PERFORM SEARCH WHEN CLICKING THE BUTTON //
searchButton.addEventListener("click", () => {
	fetchForecastWeather(searchQuery.value);
	searchQuery.value = "";
});

// PERFORM SEARCH WHEN PRESSING ENTER //
searchQuery.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		searchButton.click();
		searchQuery.value = "";
	}
});

/* ══­­­══­­­══­­­══­­­══­­­   SEARCH BAR   ══­­­══­­­══­­­══­­­═══ */

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

// FETCH DATA FROM API //
function fetchForecastWeather(location) {
	fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=63a336c4cf1f4657ba494752220203&days=3&q=${location}`
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response);
			let weatherConditionCode = response.current.condition.code;

			// SET BACKGROUND //

			function setBackground() {
				if (weatherConditionCode == 1000) {
					backgroundContainer.style.background =
						'url("./images/sunny.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1003 ||
					weatherConditionCode == 1006
				) {
					backgroundContainer.style.background =
						'url("./images/cloudy.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (weatherConditionCode == 1009) {
					backgroundContainer.style.background =
						'url("./images/overcast.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1030 ||
					weatherConditionCode == 1135 ||
					weatherConditionCode == 1147
				) {
					backgroundContainer.style.background =
						'url("./images/fog.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1063 ||
					weatherConditionCode == 1072 ||
					weatherConditionCode == 1150 ||
					weatherConditionCode == 1153 ||
					weatherConditionCode == 1168 ||
					weatherConditionCode == 1171 ||
					weatherConditionCode == 1180 ||
					weatherConditionCode == 1183 ||
					weatherConditionCode == 1186 ||
					weatherConditionCode == 1189 ||
					weatherConditionCode == 1192 ||
					weatherConditionCode == 1195 ||
					weatherConditionCode == 1198 ||
					weatherConditionCode == 1201 ||
					weatherConditionCode == 1240 ||
					weatherConditionCode == 1243 ||
					weatherConditionCode == 1246
				) {
					backgroundContainer.style.background =
						'url("./images/rain.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1066 ||
					weatherConditionCode == 1114 ||
					weatherConditionCode == 1210 ||
					weatherConditionCode == 1213 ||
					weatherConditionCode == 1216 ||
					weatherConditionCode == 1219 ||
					weatherConditionCode == 1222 ||
					weatherConditionCode == 1225 ||
					weatherConditionCode == 1255 ||
					weatherConditionCode == 1258
				) {
					backgroundContainer.style.background =
						'url("./images/snow.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1069 ||
					weatherConditionCode == 1204 ||
					weatherConditionCode == 1207 ||
					weatherConditionCode == 1237 ||
					weatherConditionCode == 1249 ||
					weatherConditionCode == 1252 ||
					weatherConditionCode == 1261 ||
					weatherConditionCode == 1264
				) {
					backgroundContainer.style.background =
						'url("./images/sleet.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (
					weatherConditionCode == 1087 ||
					weatherConditionCode == 1273 ||
					weatherConditionCode == 1276 ||
					weatherConditionCode == 1279 ||
					weatherConditionCode == 1282
				) {
					backgroundContainer.style.background =
						'url("./images/thunder.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				} else if (weatherConditionCode == 1117) {
					backgroundContainer.style.background =
						'url("./images/blizzard.jpg") no-repeat center';
					backgroundContainer.style.backgroundSize = "cover";
				}
			}

			// GET TODAY'S DATA //

			const currentCity = document.querySelector(".current-city");
			const currentTemp = document.querySelector(".current-temp");
			const currentCondition = document.querySelector(".current-condition");
			const currentHumidity = document.querySelector(".current-humidity");
			const currentWind = document.querySelector(".current-wind");

			function getTodayData() {
				currentCity.textContent = `${response.location.name}`;
				currentTemp.textContent = `${Math.round(response.current.temp_c)}°C`;
				currentCondition.textContent = `${response.current.condition.text}`;
				currentHumidity.textContent = `${response.current.humidity}%`;
				currentWind.textContent = `${Math.round(
					response.current.wind_kph
				)}km/h`;
			}

			// GET TOMORROW'S DATA //

			const tomorrowCondition = document.querySelector(".tomorrow-condition");
			const tomorrowMinTemp = document.querySelector(".tomorrow-min-temp");
			const tomorrowMaxTemp = document.querySelector(".tomorrow-max-temp");

			function getTomorrowData() {
				tomorrowCondition.textContent = `${response.forecast.forecastday[1].day.condition.text}`;
				tomorrowMinTemp.textContent = `${Math.round(
					response.forecast.forecastday[1].day.mintemp_c
				)}°C`;
				tomorrowMaxTemp.textContent = `${Math.round(
					response.forecast.forecastday[1].day.maxtemp_c
				)}°C`;
			}

			// GET OVERMORROW'S DATA //

			const overmorrowCondition = document.querySelector(
				".overmorrow-condition"
			);
			const overmorrowMinTemp = document.querySelector(".overmorrow-min-temp");
			const overmorrowMaxTemp = document.querySelector(".overmorrow-max-temp");

			function getOvermorrowData() {
				overmorrowCondition.textContent = `${response.forecast.forecastday[2].day.condition.text}`;
				overmorrowMinTemp.textContent = `${Math.round(
					response.forecast.forecastday[2].day.mintemp_c
				)}°C`;
				overmorrowMaxTemp.textContent = `${Math.round(
					response.forecast.forecastday[2].day.maxtemp_c
				)}°C`;
			}

			const currentTime = document.querySelector(".current-time");
			const currentDate = document.querySelector(".current-date");
			const tomorrowDate = document.querySelector(".tomorrow-date");
			const overmorrowDate = document.querySelector(".overmorrow-date");

			function formatDate() {
				let todayMinute = response.current.last_updated.substring(14, 16);
				let todayHour = response.current.last_updated.substring(11, 13);
				let todayDay = new Date().getDate();
				let todayMonth = new Date().getMonth();
				let todayTime = `${todayHour}:${todayMinute}`;
				let todayDate = `${months[todayMonth]} ${todayDay}`;
				currentTime.textContent = todayTime;
				currentDate.textContent = todayDate;

				let newTomorrowDate = new Date();
				newTomorrowDate.setDate(todayDay + 1);
				let tomorrowDay = newTomorrowDate.getDate();
				let tomorrowMonth = newTomorrowDate.getMonth();
				let tomorrowFormattedDate = `${months[tomorrowMonth]} ${tomorrowDay}`;
				tomorrowDate.textContent = `${tomorrowFormattedDate}`;

				let newOvermorrowDate = new Date();
				newOvermorrowDate.setDate(todayDay + 2);
				let overmorrowDay = newOvermorrowDate.getDate();
				let overmorrowMonth = newOvermorrowDate.getMonth();
				let overmorrowFormattedDate = `${months[overmorrowMonth]} ${overmorrowDay}`;
				overmorrowDate.textContent = `${overmorrowFormattedDate}`;
			}

			// GET TODAY'S HOURLY DATA //

			function getTodayHourlyData() {
				let weatherHourlyContainer = document.querySelector(
					".weather-hourly-container"
				);
				for (let i = 0; i < 24; i++) {
					let todayHour = parseInt(response.current.last_updated.substring(11, 13));
					console.log(todayHour);
					let weatherHourlyDiv = document.createElement("div");
					weatherHourlyDiv.classList.add("weather-hourly-div");
					weatherHourlyContainer.appendChild(weatherHourlyDiv);
					let hourData = (todayHour + i) % 24;
					console.log(hourData);
					let hourDataPara = document.createElement("p");
					hourDataPara.classList.add("hour-data-para");
					if (i == 0) {
						hourDataPara.textContent = "Now";
					} else {
						hourDataPara.textContent = hourData + ":00";
					}
					weatherHourlyDiv.appendChild(hourDataPara);
					let hourCondition =
						response.forecast.forecastday[0].hour[hourData].condition.text;
					let hourConditionPara = document.createElement("p");
					hourConditionPara.textContent = hourCondition;
					hourConditionPara.classList.add("hour-condition-para");
					weatherHourlyDiv.appendChild(hourConditionPara);
					let hourTemp =
						Math.round(response.forecast.forecastday[0].hour[hourData].temp_c) +
						"°C";
					let hourTempPara = document.createElement("p");
					hourTempPara.classList.add("hour-temp-para");
					hourTempPara.textContent = hourTemp;
					weatherHourlyDiv.appendChild(hourTempPara);
				}
			}

			function clearTodayHourlyData() {
				let weatherHourlyContainer = document.querySelector(
					".weather-hourly-container"
				);
				weatherHourlyContainer.innerHTML = "";
			}

			setBackground();
			getTodayData();
			clearTodayHourlyData();
			getTodayHourlyData();
			getTomorrowData();
			getOvermorrowData();
			formatDate();
		});
}

fetchForecastWeather("Nantes");
