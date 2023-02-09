// Openweather API Key //
const apiKey = "52c57acb0a101e01596874761d244dca";
// Current Weather Info //
var currWeather = $("#currentWeather");
// Five Day Forcast Info //
var forecast = $("#weatherForecast");
// City Array //
var citiesArray;

$(document).ready(function() {
    $("#cityForm").submit(function(event) {
      event.preventDefault();
    var cityName = $("#cityInput").val();
    returnLatLon(cityName);
  });
});
  

// Call API for current weather by lat and lon
function returnCurrentWeather(lat, lon) {
    let queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}
// Call API for lat and lon by city name
function returnLatLon(cityName = 'atlanta') {
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
    fetch (queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let lat = data.city.coord.lat;
        let lon = data.city.coord.lon;
        returnCurrentWeather(lat, lon);
    })
}