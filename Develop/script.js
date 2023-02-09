// Openweather API Key //
const apiKey = "52c57acb0a101e01596874761d244dca";
// Current Weather Info //
var currWeather = $("#currentWeather");
// Five Day Forcast Info //
var forecast = $("#weatherForecast");
// City Array //
var citiesArray;

$(document).ready(function() {
    // Check if citiesArray exists in local storage, if not create an empty array
    if (localStorage.getItem("citiesArray") === null) {
      citiesArray = [];
    } else {
      citiesArray = JSON.parse(localStorage.getItem("citiesArray"));
    }
  
    // Display previously searched cities
    displayCities();
  
    $("#searchForm").submit(function(event) {
      event.preventDefault();
      var cityName = $("#cityInput").val();
      returnForecast(cityName);
  
      // Add the new city to the citiesArray and update local storage
      citiesArray.push(cityName);
      localStorage.setItem("citiesArray", JSON.stringify(citiesArray));
  
      // Display the updated list of cities
      displayCities();
    });
  });
  
  // Displays clicked button's data
  $(document).on("click", ".city-button", function() {
    var cityName = $(this).attr("data-city");
    returnForecast(cityName);
  });

  function displayCities() {
    $("#previousCities").empty();
    for (var i = 0; i < citiesArray.length; i++) {
      var cityButton = $("<button>").text(citiesArray[i]);
      cityButton.addClass("city-button btn btn-primary m-1");
      cityButton.attr("data-city", citiesArray[i]);
      $("#previousCities").append(cityButton);
    }
  }
// Call forecast api by city name
function returnForecast(cityName) {
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
    
    fetch (queryURL).then(function(response){

        return response.json();
    })
    .then(function(data){
    console.log(data);
    })
}
