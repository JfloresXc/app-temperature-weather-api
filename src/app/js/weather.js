class Weather {
	constructor(city, countryCode) {
		this.city = city;
		this.countryCode = countryCode;
		this.apiKey = "dd4b013758430745bc5bc6a129a59094";
	}

	async getData() {
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
		const response = await fetch(URI);
		const data = await response.json();
		return data;
	}

	changeData(city, countryCode) {
		this.city = city;
		this.countryCode = countryCode;
	}
}

export default Weather;
