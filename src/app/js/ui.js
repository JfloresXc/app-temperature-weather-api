class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.description = document.getElementById('w-description')
        this.temperature = document.getElementById('w-temperature')
        this.clouds = document.getElementById('w-clouds')
        this.wind = document.getElementById('w-wind')
        this.celsius = document.getElementById('w-celsius')
        this.kelvin = document.getElementById('w-kelvin')
        this.fahrenheit = document.getElementById('w-fahrenheit')
        this.rankine = document.getElementById('w-rankine')
    }

    printData(obj){
        this.location.innerHTML = `${obj.name} - ${obj.sys.country}`
        this.description.innerHTML = `${obj.weather[0].description}`.toUpperCase()
        this.temperature.innerHTML = `${obj.main.temp} °C`.toUpperCase()
        this.clouds.innerHTML = `Clouds amount: ${obj.clouds.all}`
        this.wind.innerHTML = `Wind: ${obj.wind.speed} m/s`

        this.celsius.innerHTML = `Celsius: ${obj.main.temp} °C`
        this.kelvin.innerHTML = `Kelvin: ${(obj.main.temp + 273.15).toFixed(2)} K`
        this.fahrenheit.innerHTML = `Fahrenheit: ${((obj.main.temp * 9/5) + 32).toFixed(2)} °F`
        this.rankine.innerHTML = `Rankine: ${((obj.main.temp * 9/5) + 491.67).toFixed(2)} °R`
        
    }

}

export default UI