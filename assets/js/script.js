//DOM Elements for weather
var showMeButton = document.querySelector(".button");
var searchInputEl = document.querySelector("#search-input");


function handleShowMeButtonClick (event) {
    console.log("show me button was clicked");
    var weatherApiKey = "c0fe5b27487172b898ec093746e91718";
    var weatherCityName = searchInputEl.value.trim();
    weatherCityName = weatherCityName.replaceAll(' ', '+');
    var weatherCountryCode = "US";
    var weatherLimit = "1";
    var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${weatherCityName},${weatherCountryCode}&limit=${weatherLimit}&appid=${weatherApiKey}`;
    console.log(weatherApiUrl);
}

showMeButton.addEventListener("click", handleShowMeButtonClick);


