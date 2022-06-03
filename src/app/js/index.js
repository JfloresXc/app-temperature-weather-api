import Wheater from "./weather";
import UI from "./ui";
import Store from "./store";
import "../style.css";

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocalStore();
const weather = new Wheater(city);

async function fetchWeather() {
	const data = await weather.getData();
	console.log(data);
	ui.printData(data);
}

const formApi = document.getElementById("form-api");
const cities = document.getElementById("w-cities");

formApi.addEventListener("submit", async (e) => {
	e.preventDefault();
	const city = document.getElementById("w-city").value;

	if (city === "") {
		weather.changeData(cities.value);
		store.setLocalStore(cities.value);
		console.log("city");
	} else {
		weather.changeData(city);
		store.setLocalStore(city);
		console.log("cities");
	}

	fetchWeather();
});

cities.addEventListener("click", () => {
	document.getElementById("w-city").value = cities.value;
});

document.addEventListener("DOMContentLoaded", fetchWeather);
