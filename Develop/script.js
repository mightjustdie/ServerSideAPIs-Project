// Openweather API Key //
const apiKey = "52c57acb0a101e01596874761d244dca";
// Current Weather Info //
var currWeather = $("#currentWeather");
// Five Day Forcast Info //
var forecast = $("#weatherForecast");
// City Array //
var citiesArray;

$(document).ready(function() {
    $("#searchForm").submit(function(event) {
      event.preventDefault();
    var cityName = $("#cityInput").val();
    returnForecast(cityName);
  });
});
  

// Call API for lat and lon by city name
function returnForecast(cityName) {
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
    
    fetch (queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    console.log(data);
    })
}
